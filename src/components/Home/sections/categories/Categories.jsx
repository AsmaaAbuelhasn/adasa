import React from 'react'
import style from './categories.module.css'
import { NavLink } from 'react-router-dom';
export default function Categories({categoriesList}) {


    

      const categoryIcons = {
  "emerald": "fa-sun",
  "purple": "fa-user",
  "orange": "fa-camera",
  "blue": "fa-image",
};


  return <>
  <section className={`${style.section}`}>

    <div className="container">
         <div className={` d-flex p-2  justify-content-center align-items-center gap-2 m-auto ${style.wellcome}`}>
            <div className={style.glowDot}></div>
            <div className={style.ripple}></div>
            <h2 className={`mb-0 ${style.wellcomeh2}`}>التصنيفات</h2>
          </div> 
          <h2 className={`${style.heading} text-center`}>استكشف حسب الموضوع</h2>
          
          
        <p className={ `text-center ${style.desc}`}>اعثر على محتوى مصمم حسب اهتماماتك</p>

         <div className="categoriesList">

            <div className="row ">
                {categoriesList.map(category =>( 
                  
                 <div className={` col-12 col-md-3  col-xl-3 g-3 `}key={category.id} >
                  <NavLink to={`/blogs?category=${category.name}`}
                  className="text-decoration-none "
                  >
                 <div className={`${style.category} p-4 rounded-4 position-relative `}>
                  <i className={`fa-solid ${categoryIcons[category.color]} px-4 py-3 mb-2 rounded-4 ${style.cat_icon} d-flex justify-content-center`}></i>
                  <h3 className={style.cat_name}>{category.name}</h3>
                  <span className={style.cat_count}>{category.count} مقالة</span>
                  <i class={`fa-solid fa-angle-left text-white p-3 rounded-circle border border-1 d-flex justify-content-center position-absolute top-50 end-0 me-5 ${style.cat_arrow}`}></i>
                 </div>
                 
                 </NavLink>
                 </div>
                ))}
           
                     </div>

        
        </div>
          
    </div>





  </section>
  
  </>
}
