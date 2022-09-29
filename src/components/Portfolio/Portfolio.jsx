import React from "react";
import Portfolio_data from "./Portfolio-Api";
import Card from "./Card";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center">
            <h4>Visit My Portfolio</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className="content grid">
            {Portfolio_data.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  img={item.image}
                  category={item.category}
                  like={item.totalLike}
                  id={item.id}
                />
                );
              
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
