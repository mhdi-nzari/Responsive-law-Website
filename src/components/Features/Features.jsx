import React from "react";
import Card from "./Card";
import "./Features.css";
import data from "./FeaturesApi";

const Features = () => {
  return (
    <>
      <section className="features top" id="features">
        <div className="container">
          <div className="heading">
            <h4>Features</h4>
            <h1>What I Do</h1>
          </div>
          <div className="content grid">
            {data.map((item) => {
              return <Card key={item.id} id={item.id} image={item.image} title={item.title} desc={item.desc}/>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
