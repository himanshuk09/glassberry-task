import React from "react";
import Carousel from "./Carousel";
import DigitalOperatingModel from "./DigitalOperatingModel";
import DigitalCoreCapabilities from "./DigitalCoreCapabilities";
import EmpoweringTalentTransformation from "./EmpoweringTalentTransformation";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";

const images = [<SlideOne />, <SlideTwo />, <SlideThree />];
const Home = () => {
  return (
    <div>
      <Carousel images={images} />
      <DigitalCoreCapabilities />
      <DigitalOperatingModel />
      <EmpoweringTalentTransformation />
    </div>
  );
};

export default Home;
