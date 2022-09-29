import React from "react";
import Card from "./Card";
import './Blog.css'
import blogApi from "./blogApi";
import '../Portfolio/Portfolio.css'

const Blog = () => {
  return (
     <>
     <section className="portfolio blog " id="blog">
       <div className="container">
         <div className="heading text-center">
           <h4>Visit My blog</h4>
           <h1>My blog</h1>
         </div>

         <div className="content grid">
           {blogApi.map((item) => {
             return (
               <Card
                 key={item.id}
                 title={item.title_one}
                 img={item.image}
                 date={item.date}
                 title_one={item.title_one}
                 desc_one={item.desc_one}
                 title_two={item.title_two}
                 desc_two={item.desc_two}
                 title_three={item.title_two}
                 desc_three={item.desc_two}
                 id={item.id}
               />
               );
           })}
         </div>
       </div>
     </section>
   </>
  )
}

export default Blog