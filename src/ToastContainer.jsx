/* eslint-disable react/prop-types */
import './toastContainer.css'
export default function ToastContainer(props) {
  return <div className="codestates-toast-container">
    <div>
      {props.children}
    </div>
  </div> 
}