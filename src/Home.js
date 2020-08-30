import React from "react";
import "./Home.css";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/*Product id,title,price, rating , image */}
      <div className="home__row">
        <Product
          id="1"
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001"
          price={359.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SX355_.jpg"
        />
        <Product
          id="2"
          title='Apple 13.3" MacBook Pro with Touch Bar, Intel Core i5 Quad-Core, 8GB RAM, 128GB'
          price={1000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71i49M4hv2L._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="BEZGAR 17 Toy Grade 1:14 Scale Remote Control Car"
          price={35.69}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81vDYgWlQ1L._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="5"
          title="Blendtec Total Classic Original Blender"
          price={275.77}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpg"
        />
        <Product
          id="6"
          title="Jenga Classic Game"
          price={89.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81OAWwX3djL._AC_SY879_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
