import React from 'react'
import { NavLink, useParams } from "react-router-dom";
import style from './details.module.css'
import { posts } from "../blogs/Blogs";


export default function Details() {
    const { slug } = useParams();
    const activePost = posts.find(
  (post) => post.slug === slug);
  const sections = activePost.content.split(/\n(?=## )/);

  console.log(slug);
  return <>
  <section className={`${style.section} bg-black`}>
  <div className={`${style.hero_image} min-vh-100 `}
  style={{
    backgroundImage: `url(${activePost.image})`
  }}
  >
        <div className={` ${style.content} container `}>
        <div className={` d-flex gap-4 `}>
            <button className={`${style.category} p-2 border-0`}>{activePost.category}</button>
            <p className='text-white mb-0 d-flex gap-2 align-items-center  '><i class="fa-regular fa-calendar   "></i> {activePost.date}</p>
        <p className='text-white mb-0 d-flex align-items-center gap-2'><i class="fa-regular fa-clock  "></i> {activePost.readTime}</p>
        </div>
        <h1 className={`text-white mt-4 w-75 ${style.title}`}>{activePost.title}</h1>
    <div className={`${style.author} d-flex gap-2 p-3 rounded-3 mt-5`}>
        <img src={activePost.author.avatar}
        className={`${style.auth_img}`}/>
        <div className=''>
            <p className={`mb-0 text-white`}>{activePost.author.name}</p>
            <span className='text-white'>{activePost.author.role}</span>
        </div>
        
        </div> 
    </div>
   

  </div>
  <div className="container d-flex">
    <div className="right w-75 ">
        <div className={`${style.excerpt}`}>{activePost.excerpt}</div>
        <div className={style.content}>

  {sections.map((section, index) => {

    const lines = section.trim().split("\n");

    if (index === 0) {
      return (
        <p key={index} className={`style.intro ${style.intro}`}>
          {section.trim()}
        </p>
      );
    }

    
    const title = lines[0].replace("## ", "").trim();

    const text = lines
      .slice(1)
      .join(" ")
      .trim();

    return (
      <section key={index} className="">

        <h2 className={style.head}><i className='fa-solid fa-camera'></i>{title}</h2>

        <p className={style.paragraph}>{text}</p>

      </section>
    );
  })}

</div>

    </div>

  </div>
  
  </section>
    
  </>
      
}
