import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home';
import Blogs from './components/blogs/Blogs';
import NotFound from './NotFound'
import Details from './components/details/Details'


let routers=createBrowserRouter([
  {path:"",element:<Layout/>,
    children:[
      {index:true , element:<Home/>},
      {path:"blogs",element:<Blogs/>} ,
      {path:"/blog/:slug" , element:<Details/>},
      
      {path:"*",element:<NotFound/>}
    ]
  }
])

function App() {
 

  return (
    <>
     <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
