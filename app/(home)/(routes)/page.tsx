import React from "react";
import Carousel from "./_components/1_Carousel";
import Benefit from "./_components/2_Benefit";
import WhyCEMC from "./_components/3_WhyCEMC";
import Motel from "./_components/4_Motel";
import Event from "./_components/5_Event_Bus";
import HighlightSchool from "./_components/6_HightlightSchool";
import News_Home from "./_components/8_News/News_Home";
import getNews from "../../../action/get-news";

const HomePage = async () => {
  const news = await getNews();
  return (
    <>
      <div className="w-10/12 h-full mx-auto ">
        <Carousel />
      </div>
      <div>
        <Benefit />
      </div>
      <WhyCEMC />
      <Motel />
      <Event />
      <div className="mt-16 p-4 bg-[url('/Home_Bg_Hightlight.png')]">
        <HighlightSchool />
      </div>
      <div >
        <News_Home news={news} />
      </div>
    </>
  );
};

export default HomePage;
