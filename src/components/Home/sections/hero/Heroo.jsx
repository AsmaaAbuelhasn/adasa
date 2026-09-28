import React from 'react'
import style from './hero.module.css'

export default function Heroo() {
  return <>
    <div className={` min-vh-100   ${style.header}`}>

      <div className={` d-flex p-2 m-auto justify-content-center align-items-center gap-3 ${style.wellcome}`}>
        <div className={style.glowDot}></div>
        <div className={style.ripple}></div>
        <h2 className={`mb-0 ${style.wellcomeh2}`}>مرحبا بك في عدسة</h2>
      </div>
      <h1 className={`text-center m-auto w-50   ${style.descover}`}>اكتشف <span  className={` ${style.orange}`} >فن </span> التصوير الفوتوغرافي</h1>
      <p className={` text-center m-auto w-50 ${style.vission}`}>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
      <div className='d-flex justify-content-center my-5 gap-4 '>
        <button className={`border-0  d-flex gap-2 ms-auto l p-3  ${style.discovery_btn}`}>استكشف المقالات <i className='fa-solid fa-arrow-left-long d-flex justify-content-center align-items-center'></i></button>
        <button className={` d-block me-auto p-3    ${style.learn_more_btn}`} ><i className='fa-solid fa-circle-exclamation'></i> اعرف المزيد</button>
      </div>

      <div className="cards pb-5  ">
        <div className="container ">
          <div className="row   ">
            <div className="col-12 col-md-3 col-xl-3   ">
              <div className={ `rounded-4 py-3    text-center ${style.card}`}>
              <i className={`fa-solid fa-paper-plane d-flex justify-content-center alighn-items-center m-auto  ${style.logo_card}`}></i>
              <p className={`${style.counter_card} my-2`}>50+</p>
              <p className={`${style.desc_card} mb-0`}>مقالة</p>
              </div>
              
            </div>
            <div className="col-12 col-md-3 col-xl-3 ">
              <div className={ `rounded-4 py-3  text-center ${style.card}`}>
              <i className={`fa-solid fa-users d-flex justify-content-center alighn-items-center m-auto  ${style.logo_card}`}></i>
              <p className={`${style.counter_card} my-2`}>+10الف</p>
              <p className={`${style.desc_card} mb-0`}>قارئ</p>
              </div>
              
            </div>
            <div className="col-12 col-md-3 col-xl-3 ">
              <div className={ `rounded-4 py-3  text-center ${style.card}`}>
              <i className={`fa-solid fa-folder d-flex justify-content-center alighn-items-center m-auto  ${style.logo_card}`}></i>
              <p className={`${style.counter_card} my-2`}>4</p>
              <p className={`${style.desc_card} mb-0`}>تصنيفات</p>
              </div>
              
            </div>
            <div className="col-12 col-md-3 col-xl-3 ">
              <div className={ `rounded-4 py-3  text-center ${style.card}`}>
              <i className={`fa-solid fa-pen d-flex justify-content-center alighn-items-center m-auto  ${style.logo_card}`}></i>
              <p className={`${style.counter_card} my-2`}>6</p>
              <p className={`${style.desc_card} mb-0`}>كاتب</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </>
}
