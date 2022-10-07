import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";

import hero from "../../img/hero.png";
import skill1 from "../../img/skill1.png";
import skill2 from "../../img/skill2.png";
import skill3 from "../../img/skill3.png";

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="container f_flex top">
        <div className="left top">
          <h3>Welcone To My World</h3>
          <h1>
            Hi,I'm <span>Mahdi Nazari</span>
          </h1>

          <h2>
            a'
            <span>
              <Typewriter
                words={["Professional", "Coder", "Developer", "Ui Designer!"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            maiores, repudiandae ex velit nihil accusantium cum, obcaecati
            assumenda explicabo, deleniti provident similique. Quasi mollitia
            quae nostrum fuga, eum veritatis velit.
          </p>
          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>Find WITH ME</h4>
              <div className="button">
                <button className="btn_shadow">
                  <i className="fab fa-facebook"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-instagram"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
            </div>
            <div className="col_1">
              <h4>BEst Skill On</h4>
              <button className="btn_shadow">
                <LazyLoadImage src={skill1} alt="" />
              </button>
              <button className="btn_shadow">
                <LazyLoadImage src={skill2} alt="" />
              </button>
              <button className="btn_shadow">
                <LazyLoadImage src={skill3} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="right_img">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
