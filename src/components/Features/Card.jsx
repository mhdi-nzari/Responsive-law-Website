import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="box btn_shadow">
        <img src={props.image} alt={"pic" + props.id} width="80px" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default Card;
