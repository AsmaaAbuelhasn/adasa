import React from 'react'
import style from './latest.module.css'
import { NavLink } from 'react-router-dom';


export default function Latest({ posts={posts}}) {
  return <>
  
  <section className={` ${style.section} p-5`}>
    <div className="container">
       <div className={` d-flex py-2   justify-content-center align-items-center gap-3 ${style.wellcome}`}>
            <div className={style.glowDot}></div>
            <div className={style.ripple}></div>
            <h2 className={`mb-0 ${style.wellcomeh2}`}>الأحدث</h2>
          </div> 
          <h2 className={style.heading}>احدث المقالات</h2>
          
          <div className='d-flex justify-content-between '>
        <p className={style.desc}>محتوى جديد طازج من المطبعة</p>
        <NavLink className={` text-decoration-none    ${style.more}`} to="blogs">عرض جميع المقالات <i className='fa-solid fa-arrow-left-long  justify-content-center align-items-center'></i></NavLink>
          </div>


          <div className="cards">
            <div className="row">
              {posts.slice(0,3).map((post)=>(
              <div className="col-12 col-md-4 col-xl-4">
                <div className={` card ${style.card} overflow-hidden position-relative`}>
                  <img src={post.image} className={` rounded-top-2 ${style.image}`}/>
                  <p className={`position-absolute top-0 start-0 m-3 p-2 rounded-5  text-white ${style.categ}`}>{post.category}</p>
                  <div className={`${style.detailes} p-3`}>
                    <div className={`d-flex gap-3 p-4 ${style.time} `} >
                      <i className="fa-solid fa-clock-three text-white d-flex "></i>
                      <p>{post.readTime}</p>
                      <i className="fa-solid fa-dot text-white d-flex"></i>
                      <p>{post.date}</p>
                    </div>
                    <h2 className={style.title}>{post.title}</h2>
                    <p className={style.excerpt}>{post.excerpt}</p>
                    <hr className="text-white"/>
                     

                      <div className='d-flex justify-content-between ' >
                                     <div className='d-flex gap-2 '>
                                       <img src={post.author.avatar} className={`${style.authImg}   rounded-circle`} />
                                       <div className={` `}>
                                         <p className={`${style.authName} mb-0`}>{post.author.name}</p>
                                         <span className={`${style.date}`}>{post.date}</span>
                                       </div>
                     
                                     </div>
                                         <NavLink className={`text-decoration-none ${style.more_read}`} to=""> <i class="fa-solid fa-angle-left"></i></NavLink>
                     
                                   </div>
                     
                  </div>
                  
                </div>
              </div>
              ))}
             
            </div>
          </div>
    </div>
  </section>
  </>
}
