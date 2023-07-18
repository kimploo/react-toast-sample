import './App.css';
import ToastContainer from './ToastContainer';
import Toast from './Toast';
import { useState } from 'react';

function App() {
  const [toasts, setToasts] = useState([
    {
      id: 0,
      text: '토스트 UI 입니다.',
    },
  ]);

  const addToast = () => {
    setToasts((prevState) => [
      ...prevState,
      { id: Math.random() * 100, text: '토스트 UI입니다.' },
    ]);
  };

  const handleToast = (id, time) => {
    const timeoutId = setTimeout(() => {
      setToasts((prevToasts) => {
        return prevToasts.filter(el => el.id !== id);
      });
    }, time);
    return timeoutId;
  };

  return (
    <div>
      <main>
        <button className='notify' onClick={addToast}>
          Notify !
        </button>
      </main>
      <ToastContainer>
        {toasts.map((toast) => {
          return (
            <Toast
              key={toast.id}
              deleteToast={(type) => handleToast(toast.id, type)}
            >
              {toast.text}
            </Toast>
          );
        })}
      </ToastContainer>
    </div>
  );
}

export default App;
