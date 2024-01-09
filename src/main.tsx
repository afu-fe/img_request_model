import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// ! 为了方便调试, 暂时不使用严格模式, 避免开发环境下 useEffect 执行两次的问题
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
