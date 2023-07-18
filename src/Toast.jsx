/* eslint-disable react/prop-types */
// 페이지의 특정 부분에
// 다른 UI를 모두 가리고
// 일정 시간동안 안내를 해야합니다.

import { useEffect } from 'react';
import './toast.css'
import { useState } from 'react';

export default function Toast ({ children, deleteToast }) {
  const [ isAboutToClose, setClose ] = useState(false);

  useEffect(() => {
    const timeoutId = deleteToast(3000);
    return () => clearTimeout(timeoutId)
  }, [deleteToast])

  useEffect(() => {
    if (isAboutToClose) {
      const timeoutId = deleteToast(400);
      return () => clearTimeout(timeoutId)
    }
  }, [deleteToast, isAboutToClose])

  return (
    <div className={`codestates-toast-main ${isAboutToClose ? "codestates-toast-main-close" : null}`}>
      <h4>{children}</h4>
      <button onClick={() => {
        setClose(true);
      }}>X</button>
    </div> 
  )
}
