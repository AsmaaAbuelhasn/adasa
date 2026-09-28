import React from 'react'
import Header from './header/Header'
import {Outlet} from 'react-router-dom'
import Footer from './footer/Footer'

export default function Layout() {
  return (
    <div>
      <Header/>
      <div className="p"> <Outlet/></div>
      
      <Footer/>
    </div>
  )
}
