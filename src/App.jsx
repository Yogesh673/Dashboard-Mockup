import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SideBar from './SideBar'
import MainDash from './MainDash'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='AppSt'>
      <SideBar/>
      <MainDash/>
      
    </div>
  )
}

export default App
