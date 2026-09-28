import React from 'react'
import {posts} from '../../blogs/Blogs.jsx'
import { NavLink } from 'react-router-dom'
import style from './line.module.css'



export default function Line({activeCat ,activeSection}) {
  return <>
  
  <div>
          {posts
          .filter((post)=>activeCat === "all" ||post.category===activeCat)
          .slice(activeSection*6,activeSection*6+6)
          .map((blog)=>(
            <div className={`d-flex gap-2 rounded-4  ${style.blog} position-relative  `}>
              <div className='overflow-hidden'>
                <img src={blog.image} className={`rounded-start-4 w-100 h-100 ${style.image}`}/>
              </div>

            <div className="p-3">
              <div className='d-flex align-items-center  gap-3 mb-2'>
                <span className={`mb-0 ${style.category}`}>{blog.category}</span>
                <p className={`${style.time} mb-0`}><i class="fa-regular fa-clock"></i> {blog.readTime}</p>
              </div>
              <h2 className={`${style.title}`}>{blog.title}</h2>
              <p className={`${style.excerpt} mb-4`}>{blog.excerpt}</p>

              <div className='d-flex justify-content-between mt-3' >
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
  
  </>
}
