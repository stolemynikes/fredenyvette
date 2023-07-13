import './App.css'
import Navbar from './components/Navbar'

//pages
import Home from './pages/Home'

//router
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    
        <Navbar/>

        <Routes>

            <Route path="/" exact element={<Home/>}/>

        </Routes>

    </>
  )
}

export default App
