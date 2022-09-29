import React from "react";

const Card = (props) => {
  return (
    <div className="box btn_shadow">
      <div className="title_content d_flex">
        <div className="title">
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>
        <div className="rate">
          <div className="btn_shadow">{props.rating}</div>
        </div>
      </div>
        <hr />
        <p>{props.desc}</p>
    </div>
  );
};

export default Card;
