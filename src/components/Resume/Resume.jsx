import React from "react";
import ResumeApi from "./Resume-Api";
import Card from "../Resume/Card";
import "./Resume.css";
const Resume = () => {
  return (
    <section className="Resume" id="resume">
      <div className="container top">
        <div className="heading text-center">
          <h4>+7 Years Exprience</h4>
          <h1>My Resume</h1>
        </div>

        <div className="content-section mtop d_flex">
          <div className="left">
            <div className="heading">
              <h4>2007-2010</h4>
              <h1>Job Education</h1>
            </div>
            <div className="content">
              {ResumeApi.map((item) => {
                if (item.category === "education") {
                  return (
                    <Card
                      key={item.id}
                      category={item.category}
                      year={item.year}
                      title={item.title}
                      desc={item.desc}
                      rating={item.rate}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="left">
            <div className="heading">
              <h4>2007-2010</h4>
              <h1>Job experience</h1>
            </div>
            <div className="content">
              {ResumeApi.map((item) => {
                if (item.category === "experience") {
                  return (
                    <Card
                      key={item.id}
                      category={item.category}
                      year={item.year}
                      title={item.title}
                      desc={item.desc}
                      rating={item.rate}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
