import React, { useState } from "react";
import img from "../../img/blog-01.jpg";
import img2 from "../../img/blog-01.jpg";

const Card = (props) => {
  const [modal, setModal] = useState(false),
    toggleModal = () => {
      setModal(!modal);
    };

  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={img2} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.date}</span>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* --------------------POPUP MODAL */}
      {modal && (
        <div className="modal modal-blog">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content ">
            <div className="modal-img left">
              <img src={img} alt="" />
            </div>
            <div className="modal-text right">
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>
              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>

              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fas fa-times"></i>
              </button>
              <div className="contact mtop">
                <h1>Leave a Reply</h1>
               
               
                <form action="" className="blog_contact d_flex">
                    <div className="left">
                         <input type="text" name="" id="" placeholder="Name" />
                         <input type="text" name="" id="" placeholder="Email" />
                         <input type="text" name="" id="" placeholder="Website" />
                         <button className="btn_shadow">Submit Now</button>
           
                    </div>
                    
                    <div className="right">
                         <textarea name="" id="" cols="30" rows="12" placeholder="Comment"></textarea>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
