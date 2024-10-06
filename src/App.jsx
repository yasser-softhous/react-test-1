import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Components/Test/Test'
import {TestF} from './Components/TestF/TestF'
import  'bootstrap/dist/js/bootstrap.bundle'
import  'bootstrap/dist/css/bootstrap.min.css'
import {GetApi} from './Components/GetApi/GetApi'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> React with Vite</h1>
      <Test />
      <TestF />
      <GetApi />
    </>
  )
}

export default App
