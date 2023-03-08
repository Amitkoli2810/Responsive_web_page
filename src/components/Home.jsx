import React from "react";
import "../styles/home.scss";
import vg from "../assests/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>E-commerce</h1>
          <p>Solution of all problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab.
          Numquam esse autem dolores sunt a molestiae accusamus consectetur. A
          odit accusantium asperiores hic quasi aut explicabo, optio molestiae.
          Error!
        </p>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum
            harum voluptate inventore unde, iusto consectetur magnam dolores
            pariatur, quaerat sed veritatis odit exercitationem necessitatibus
            sequi illo eveniet nihil officia.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
                <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          
            
            
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
