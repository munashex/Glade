import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar/>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main> 
      <Footer/>
    </Router>
  )
}

export default App