import React from "react";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Category from "../../Components/Category/Category.";
import LayOut from "../../Components/LayOut/LayOut";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";

const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
      <Footer />
    </LayOut>
  );
};

export default Landing;
