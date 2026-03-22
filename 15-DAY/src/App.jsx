import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/Product'
import Notfound from './pages/notfound'
import Men from './pages/mens'
import Women from './pages/women'
import Course from './pages/courses'
import Navbar2 from './components/navbar2'
import CourseDetails from './pages/coursedetail'
import { Routes,Route } from "react-router-dom";
const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>

        <Route path='/courses' element={<Course/>}/>

        {/* //iska mtlb dynamic routing ab hum /courses/ ke baad khuch bhi type kruga toh wo iss page pr lekr jayega : ke id ke alwa khuch bhi likh skte hai*/}
        <Route path='/courses/:attu' element={<CourseDetails/>}/>

        {/*ham yaha pr product mai nested routing kr rhe hai aur ye basic tareeka hai */}
        {/* aur ye method 1 jo ki basic h aise hum nhi krenge */}
        {/* <Route path='/product' element={<Product/>} /> */}
        {/* method 2 - mai hum self closing tag nhii banyenge hum simple tag banayenge jiske andr nested wale route daal denge */}
        <Route path='/product' element={<Product/>} >

         <Route path='men' element={<Men/>} />
        <Route path='women' element={<Women/>} />
        
        </Route>

        <Route path='*' element={<Notfound/>} />
        
       

      </Routes>
      <Footer/>
    </div>
  )
}

export default App