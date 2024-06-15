import { cloneElement, useCallback, useEffect, useRef, useState } from "react"
import "./styles.css"

export default function ConfigurableToasts() {

  const [duration, setDuration] = useState(500)

  const [toasts, setToasts] = useState([])

  let topLeftToasts = toasts.filter(toast => toast.position === "top-left")
  let bottomLeftToasts = toasts.filter(toast => toast.position === "bottom-left")
  let topRightToasts = toasts.filter(toast => toast.position === "top-right")
  let bottomRightToasts = toasts.filter(toast => toast.position === "bottom-right")

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    let position = e.target.querySelector("#position").value;
    let type = e.target.querySelector("#type").value;
    let duration = e.target.querySelector("#duration").valueAsNumber;
    let text = e.target.querySelector("#text").value;

    setToasts(toasts => ([...toasts, {position, type, duration, text, id:Math.random()}]))
  }, [])


  const removeToast = useCallback((id) => {
    setToasts(toasts => toasts.filter(toast => toast.id !== id))
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="position">Position: </label>
          <select id="position">
            <option value={"top-left"}>Top-Left</option>
            <option value={"top-right"}>Top-Right</option>
            <option value={"bottom-left"}>Bottom-Left</option>
            <option value={"bottom-right"}>Bottom-Right</option>
          </select>
        </div>

        <div>
          <label htmlFor="type">Type: </label>
          <select id="type">
            <option value={"warning"}>Warning</option>
            <option value={"success"}>Success</option>
            <option value={"error"}>Error</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration">Duration: </label>
          <input onChange={e => setDuration(e.target.valueAsNumber)} type="range" id="duration" min={500} max={5000} />
          <p>{duration} ms</p>
        </div>

        <div>
          <label htmlFor="text">Text: </label>
          <input type="text" id="text" defaultValue="Toast message" />
          <p>{duration} ms</p>
        </div>

        <div>
          <button type="submit">Add Toast</button>
        </div>
      </form>

      <div className="toast-container top-left-container">
        {topLeftToasts.map(toast => (
          <Toast key={toast.id}
          duration = {toast.duration}
          type={toast.type}
          id={toast.id}
          removeToast={removeToast}
          position={toast.position}
          text={toast.text}
          />
        ))}
      </div>

      <div className="toast-container bottom-left-container">
        {bottomLeftToasts.map(toast => (
          <Toast key={toast.id}
          duration = {toast.duration}
          type={toast.type}
          id={toast.id}
          removeToast={removeToast}
          position={toast.position}
          text={toast.text}
          />
        ))}
      </div>

      <div className="toast-container top-right-container">
        {topRightToasts.map(toast => (
          <Toast key={toast.id}
          duration = {toast.duration}
          type={toast.type}
          id={toast.id}
          removeToast={removeToast}
          position={toast.position}
          text={toast.text}
          />
        ))}
      </div>

      <div className="toast-container bottom-right-container">
        {bottomRightToasts.map(toast => (
          <Toast key={toast.id}
          duration = {toast.duration}
          type={toast.type}
          id={toast.id}
          removeToast={removeToast}
          position={toast.position}
          text={toast.text}
          />
        ))}
      </div>
    </>
  )
}

function Toast({duration, type, position, text, removeToast, id}) {
  const [transition, setTransition] = useState("")
  useEffect(() => {
    let i1 = setTimeout(() => {
      setTransition(`${position}-start`)
    }, 0)

    let i2 = setTimeout(() => {
      setTransition("")
    }, duration)

    let i3 = setTimeout(() => {
      removeToast(id)
    }, duration+500)

    return () => {
      clearTimeout(i1)
      clearTimeout(i2)
      clearTimeout(i3)
    }
  }, [])
  return (
    <div className={`toast ${type} ${position} ${transition}`}>
      {text}
    </div>
  )
}