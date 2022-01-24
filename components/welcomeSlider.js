import React from "react";
import Head from 'next/head'
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Slide from "./slide";

const slides = [
    {
        id: 1,
        title : "Hello World",
        description : "Welcome to NxtNet, the home for startups and code."
    },
    {
        id: 2,
        title : "Startups",
        description : "Welcome to NxtNet, the home for startups and code."
    },
    {
        id: 3,
        title : "Code",
        description : "Welcome to NxtNet, the home for startups and code."
    }
]

export default function WelcomeSlider() {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
      <div >
          <Head>
          <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
      </Head>
      <Box>
      <Slider {...settings} >
       {slides && slides.map(s=>{
           return(<Slide key={s.id} title={s.title}/>)
       })}
    </Slider>
    </Box>
    </div>
  );
}

