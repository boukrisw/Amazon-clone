import React from "react";
import "./Home.css";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="/Images/background.jpg"
        alt=""
      />
      {/*Product id,title,price, rating , image */}
      <div className="home__row">
        <Product
          id="1"
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001"
          price={359.99}
          rating={5}
          image="/Images/nintendo.jpg"
        />
        <Product
          id="2"
          title='Apple 13.3" MacBook Pro with Touch Bar, Intel Core i5 Quad-Core, 8GB RAM, 128GB'
          price={1000}
          rating={5}
          image="/Images/apple.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="BEZGAR 17 Toy Grade 1:14 Scale Remote Control Car"
          price={35.69}
          rating={4}
          image="Images/apple.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="5"
          title="Blendtec Total Classic Original Blender"
          price={275.77}
          rating={4}
          image="/Images/Blendtec.jpg"
        />
        <Product
          id="6"
          title="Jenga Classic Game"
          price={89.99}
          rating={5}
          image="/Images/Jenga.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
