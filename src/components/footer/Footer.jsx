import React from 'react'
import style from './footer.module.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return <>
<div className={style.footer}>

    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 col-md-6">
          <div className="header">
            <h1 className={style.title} ><p className={`d-inline ${style.logo} text-white p-2 rounded-2 me-3`}> ع</p>عدسة </h1>
            <p className={` mt-3 ${style.logo_desc}`}>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
            <div className="social-icons d-flex gap-2 w-75 mt-2">
              <i className={`fa-brands fa-youtube d-flex  p-1  rounded-2 justify-content-center align-items-center w-25 ${style.social}`}></i>
              <i className={`fa-brands fa-linkedin d-flex  p-2  rounded-2 justify-content-center align-items-center w-25 ${style.social}  `}></i>
              <i className={`fa-brands fa-github d-flex  p-2  rounded-2 justify-content-center align-items-center w-25 ${style.social}`}></i>
              <i className={`fa-brands fa-x-twitter d-flex  p-2 rounded-2 justify-content-center align-items-center w-25 ${style.social} `}></i>
          </div>
            
            </div>

          
        </div>
        <div className="col-12 col-lg-3 col-md-6">
          <div className="descovery ">
            <h2 className={` ms-4 ${style.logo_title}`}>استكشف</h2>
            <ul className="list-unstyled">
              <li className=""><NavLink className={`text-decoration-none d-block ${style.links}`}  to="/">الرئيسية</NavLink></li>
              <li><NavLink className={`text-decoration-none  ${style.links}`}  to="blogs">المدونة</NavLink></li>
              <li><NavLink className={`text-decoration-none ${style.links}`}  to="/">من نحن</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6">
          <div className="classification">
            <h2 className={style.logo_title}>التصنيفات</h2>
             <ul className="list-unstyled">
              <li><NavLink className={`text-decoration-none  ${style.links}`}  to="lights">اضاءة</NavLink></li>
              <li><NavLink className={`text-decoration-none  ${style.links}`}  to="persons">بورترية</NavLink></li>
              <li><NavLink className={`text-decoration-none  ${style.links}`}  to="nature">مناظر طبيعية</NavLink></li>
              <li><NavLink className={`text-decoration-none  ${style.links}`}  to="tech">تقنيات</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6">
          <div className="conectus">
            <h2 className={style.logo_title}>ابقي علي اطلاع</h2>
            <p className={style.logo_desc}>اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <input className={`form-control ${style.input} ${style.logo_desc}`} placeholder='أدخل بريدك الالكتروني' />
            <button className={`btn w-100  rounded-pill text-white ${style.btn}  ${style.logo_desc}`}>اشترك</button>
          </div>
        </div>
      </div>
     
    </div>
     <hr />
     <div className="container">
      <div className='d-flex justify-content-between'>
        <p className={`${style.logo_desc}`}>© 2026 عدسة. صنع بكل <i className={`fa-solid fa-heart ${style.orange}`}></i> جميع الحقوق محفوظة.</p>
        <ul className='list-unstyled d-flex gap-3'>
          <li className={`${style.logo_desc}`}>سياسة الخصوصية</li>
          <li className={`${style.logo_desc}`}>شروط الخدمة</li>
        </ul>
      </div>
     </div>
  </div>  
  </>
}
