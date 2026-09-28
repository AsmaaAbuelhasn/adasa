import React from 'react'
import { posts } from '../../blogs/Blogs'
import style from './gride.module.css'
import { NavLink } from 'react-router-dom';
import Details from './../../details/Details';
import  { useState } from 'react'

  


export default function Gride({activeCat,activeSection,setActivePost}) {
  return <>
  <div className="cards pt-5">
                    <div className="row">
                      {posts.filter((post)=> activeCat === "all" ||post.category===activeCat)
                      .slice(activeSection*6,activeSection*6+6)
                      .map((post)=>(
                      <NavLink
                      to={`/blog/${post.slug}`}
                      key={post.id}
                       className="col-12 col-md-4 col-xl-4 text-decoration-none"
                      
                      
                      >
                        <div className={` card ${style.card} overflow-hidden position-relative m-3`}>
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
                      </NavLink>
                      ))}
                     
                    </div>
                  </div>
  
  </>
}
