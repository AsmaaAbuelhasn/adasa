import React from 'react'
import { NavLink } from 'react-router-dom'
import imagelog from'../../assets/logo.png'
import style from "./header.module.css"



export default function Header() {
  return <>
 
<nav className="navbar navbar-expand-lg bg-dark text-white position-fixed w-100 z-3  " >
  <div className="container-fluid ">
    <div className={`logo d-flex gap-2 align-items-center text-white ${style.navbar}`}>
      <div className="imglog">
        <img src={imagelog} alt="" className={style.logo_image}/>
      </div>
      <div className="titleLogo">
        <a className={`navbar-brand ${style.logo_titile} text-white `} href="" >عدسة</a>
        <span className={`d-block ${style.logo_span}`}>عالم التصوير الفوتوغرافي</span>

      </div>
    </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse text-white justify-content-around " id="navbarSupportedContent">
      <ul className="navbar-nav ms-5  mb-2 mb-lg-0  border rounded-5 px-3 py-2 gap-2">
        <li className="nav-item">
          <NavLink className={`nav-link  text-decoration-none px-4    ${style.nav_link} ${style.colorlink}`} aria-current="page" to="">الرئيسية</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link  text-decoration-none px-4 ${style.nav_link} ${style.colorlink}`} to="blogs">المدونة</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link  text-decoration-none px-4  ${style.nav_link} ${style.colorlink}`} to="blogs">من نحن</NavLink>
        </li>
        
   
        
      </ul>
      <form className="d-flex gap-4" role="search">
        <i className='fa-solid fa-search d-flex justify-content-center align-items-center'/>
        <button className={`btn text-white ${style.start_read} p-3 `} type="submit">ابدأ القراءة</button>
      </form>
    </div>
  </div>
</nav>

  </>

 
}
