import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { getImageData } from './data/data'
import { AutoRnImage } from './components/image/AutoRnImage'

console.log(getImageData())

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <AutoRnImage imgUrl="https://pic-b.autoimg.cn/www2.autoimg.cn/chejiahaodfs/g28/M03/BC/15/300x0_q87_autohomecar__CjIFVGWQJHeAZyILAAGutXeasw8492.png.webp?biztype=14&bizid=14261595&verison=20231112" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
