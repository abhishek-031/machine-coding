const Otp = {
  init(container, digits, onCompleteInput) {
    this.value = [];
    this.container = container;
    this.digits = digits;
    this.currentElement = 0;
    this.elements = [];
    this.onCompleteInput = onCompleteInput;
    for(let i=0;i<digits; i++) {
      const el = document.createElement("input");
      el.classList.add("otp-digit");
      el.dataset.index = i;
      el.type="number";
      el.max = "9";
      el.min = "0";
      this.elements.push(el);
      this.value.push("");
      this.container.appendChild(el);
    }
    this.elements[0].focus();

    this.container.addEventListener("keyup", this.handleInput.bind(this))
    this.container.addEventListener("click", this.handleFocus.bind(this))
  },
  handleInput(e) {
    if(e.key === "Backspace" || e.key === "Delete") {
      if(this.currentElement > 0) {
        if(e.target.value === "") {
          this.currentElement--;
          this.elements[this.currentElement].value = "";
          this.elements[this.currentElement].focus();
        } else {
          e.target.value = "";
        }
      } else {
        e.target.value = "";
      }
    } else if(e.target.value.length <= 1) {
      this.value[this.currentElement] = e.target.value;
      if(this.currentElement === this.digits - 1) {
        this.onCompleteInput(this.value.join(""));
      } else {
        this.currentElement++;
        this.elements[this.currentElement].focus();
      }
    } else {
      e.target.value = e.target.value.substr(0,1)
    }
  },
  handleFocus(e) {
    if(e.target.tagName === "INPUT") {
      this.currentElement = +e.target.dataset.index;
    }
  }
}

function initOtp(container, digits, onCompleteInput) {
  let otp = Object.create(Otp);
  otp.init(container, digits, onCompleteInput);
}

export {
  initOtp
}