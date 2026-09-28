import React from 'react'
import style from './specificBlogs.module.css'
import { NavLink } from 'react-router-dom';

export default function SpecificBlogs({posts}) {

   




  return <>
<section className={`bg-dark py-5 ${style.blogs}`}>
    <div className="container">
         <div className={` d-flex py-2   justify-content-center align-items-center gap-3 ${style.wellcome}`}>
            <div className={style.glowDot}></div>
            <div className={style.ripple}></div>
            <h2 className={`mb-0 ${style.wellcomeh2}`}>مميز</h2>
          </div> 
          <h2 className={style.heading}>مقالات مختارة</h2>
          
          <div className='d-flex justify-content-between '>
        <p className={style.desc}>محتوى منتقى لبدء رحلة تعلمك</p>
        <NavLink className={` text-decoration-none text-white px-3 py-2 rounded-3 ${style.more}`} to="blogs">عرض الكل <i className='fa-solid fa-arrow-left-long  justify-content-center align-items-center'></i></NavLink>
          </div>
        


        <div>
          {posts.slice(0,3).map((blog)=>(
            <div className={`d-flex gap-2 rounded-4  ${style.blog} position-relative  `}>
              <div className='overflow-hidden'>
                <img src={blog.image} className={`rounded-start-4 w-100 h-100 ${style.image}`}/>
              </div>
                        <p className={`position-absolute text-white ${style.specific} m-3 p-2 rounded-pill `}><i className='fa-solid fa-star'></i> مميز</p>

            <div className="p-5">
              <div className='d-flex align-items-center  gap-3 mb-3'>
                <span className={`mb-0 ${style.category}`}>{blog.category}</span>
                <p className={`${style.time} mb-0`}><i class="fa-regular fa-clock"></i> {blog.readTime}</p>
              </div>
              <h2 className={`${style.title}`}>{blog.title}</h2>
              <p className={`${style.excerpt} mb-4`}>{blog.excerpt}</p>

              <div className='d-flex justify-content-between mt-5' >
                <div className='d-flex gap-2 '>
                  <img src={blog.author.avatar} className={`${style.authImg}   rounded-circle`} />
                  <div className={` `}>
                    <p className={`${style.authName} mb-0`}>{blog.author.name}</p>
                    <span className={`${style.date}`}>{blog.date}</span>
                  </div>

                </div>
                    <NavLink className={`text-decoration-none ${style.more_read}`} to=""> اقرأ المقال <i class="fa-solid fa-arrow-left-long "></i></NavLink>

              </div>

            </div>
          </div>
          ))}
          

        </div>
        </div> 



        
     
  </section>
</>
}
