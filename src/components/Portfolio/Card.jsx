import React, { useState } from "react";
import img from "../../img/portfolio3.png";
import img2 from "../../img/portfolio1.png";

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
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className="far fa-heart"></i>
            {props.like}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* --------------------POPUP MODAL */}
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={img} alt="" />
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                porro labore incidunt voluptates ipsa corporis nesciunt soluta,
                distinctio ullam et sed consequatur aut enim quas eius,
                perferendis dolores esse cupiditate.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A id
                recusandae veritatis debitis qui. Pariatur natus labore eos
                debitis omnis enim ipsum iure eaque illo, ullam nemo corrupti
                placeat nesciunt?
              </p>
              <div className="button f_flex mtop">
                <button className="btn_shadow">
                  Like this <i className="far fa-thumbs-up"></i>
                </button>
                <button className="btn_shadow">
                  VIEW PROJECT <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
