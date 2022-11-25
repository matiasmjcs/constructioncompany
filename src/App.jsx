import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './componentes/footer/footer'
import Nav from './componentes/nav/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
