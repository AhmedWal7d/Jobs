import React from "react";
import Navbarresponsev from "../Navbar/navbarresponsev";
import Navbar from "../Navbar/Navbar";
import Slider from "./Slider";
import ExploreCategories from "./ExploreCategories";
import TopTaskers from "./TopTaskers";
import ServiceCompanies from "./ServiceCompanies";
import Fixeddiv from "./Fixeddiv";

export default function Home() {
  return (
    <>
      <div>
        <div className="d-none d-lg-block">
          <Navbar />
        </div>
        <div className="d-lg-none">
          <Navbarresponsev />
        </div>


        <Slider />
        <ExploreCategories />
        <TopTaskers />
        <ServiceCompanies />
        <Fixeddiv/>

    
      </div>
    </>
  );
}
