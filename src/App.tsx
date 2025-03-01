import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Character from "./pages/Character"
import Episodes from "./pages/Episodes"
import Location from "./pages/Location"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={<Character/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/locations" element={<Location/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
