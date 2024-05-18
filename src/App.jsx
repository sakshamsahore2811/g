import './App.css'
import Head from './pages/Head'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Gallery from './pages/Gallery'
import Directions from './pages/Directions'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Head/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/directions" element={<Directions/>}/>
      </Routes></BrowserRouter>
    </>
  )
}

export default App
