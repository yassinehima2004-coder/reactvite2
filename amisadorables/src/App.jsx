import { BrowserRouter, Routes, Route } from "react-router-dom"
import Mainlayout from "./layouts/Mainlayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"


function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
