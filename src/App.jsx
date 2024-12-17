import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'

const App = () => {
  return (
    <>
    {/* navbar components */}
    <Navbar/>
    {/* routing setup for the app */}
    <Routes> {/*it will ensure there is only one route that matches the path is rendered in the ui */}
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    </>
  )
}

export default App