import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import AppRoutes from './routes/AppRoutes';
  
function App() {
  //const [isOpen, setIsOpen] = useState(false)     

  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
  
}

export default App

