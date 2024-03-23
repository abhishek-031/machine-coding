function debounce(delay, fn) {
  let timeout;
  return function debounced(...args) {
    if(!timeout) {
      timeout = setTimeout(() => fn(...args), delay);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    }
  }
}

const AutoComplete = {
  init(container, getResults) {
    this.getResults = getResults;

    const inputAndResultsContainer = document.createElement("div");
    const input = document.createElement("input");
    const resultsDiv = document.createElement("div");
    
    input.type = "text";
    inputAndResultsContainer.classList.add("autocomplete-container");
    input.classList.add("autocomplete-input");
    resultsDiv.classList.add("autocomplete-results");

    input.addEventListener("input", debounce(300, this.onInputChange.bind(this)));

    this.input = input;
    this.resultsDiv = resultsDiv;

    inputAndResultsContainer.appendChild(input);
    inputAndResultsContainer.appendChild(resultsDiv);
    container.appendChild(inputAndResultsContainer);
  },
  renderResults(results) {
    if(results.length) {
      this.resultsDiv.innerHTML = "";
      results.forEach(result => {
        let resultDiv = document.createElement("p");
        resultDiv.dataset.value = result;
        resultDiv.classList.add("autocomplete-result");
        resultDiv.innerText = result;
        this.resultsDiv.appendChild(resultDiv);
      })
      this.resultsDiv.addEventListener("click", this.onSelect.bind(this))
    } else {
      this.resultsDiv.innerHTML = "";
    }
  },
  onSelect(e) {
    if(e.target.dataset.value) {
      this.input.value = e.target.dataset.value;
      this.resultsDiv.innerHTML = "";
    }
  },
  onInputChange(e) {
    if(e.target.value.trim().length) {
      this.renderResults(this.getResults(e.target.value.trim()))
    } else {
      this.renderResults([])
    }
  },
}

function initAutoComplete(container, getResults) {
  if(!container || !getResults) {
    throw TypeError("parameters not provided correctly");
  }
  const autoComplete = Object.create(AutoComplete);
  autoComplete.init(container, getResults);
}

export {
  initAutoComplete,
}