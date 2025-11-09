import { Routes, Route } from 'react-router-dom'
import About from './About.jsx'
import Home from './home.jsx'
import Services from './Services.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <div>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/contact' element={<Contact />}/>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
