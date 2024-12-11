import React from 'react'
import Navbar from '/src/Components/Navbar/Navbar.jsx'
import Main from '/src/Components/Main/Main.jsx'
import Gender from '/src/Components/gender/Gender.jsx'
import Popular from '/src/Components/Popular-watches/Popular-watches.jsx'
import Recent from '/src/Components/Recently/Recently.jsx'
import About from '/src/pages/About.jsx'
import Contact from '/src/pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Login from '/src/pages/Login.jsx'
import Register from '/src/pages/Register.jsx'
import Men from '/src/pages/Men.jsx'
import Women from '/src/pages/Women.jsx'
import Kids from '/src/pages/Kids.jsx'
import Pop from '/src/pages/Popular.jsx'
import Recentt from '/src/pages/Recent.jsx'
import Brand from '/src/pages/Brand.jsx'
import Cart from '/src/pages/Cart.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'



function App() {
  return (
      <Router>
       <Navbar/>
       <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes> 
        <Routes>
          <Route path="/" element={<Popular/>}/>
        </Routes>

        <Routes>
          <Route path="/" element={<Gender/>}/>
        </Routes>

        <Routes>
          <Route path="/" element={<Recent/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/popular' element={<Pop/>}/>
          <Route path='/recent' element={<Recentt/>}/>
          <Route path="/brand" element={<Brand/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </Router>
      )
     
}

export default App
