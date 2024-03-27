import React from 'react'
import Slider from "react-slick"
import Poster from '../Poster/PosterComponent'

const PosterSlider = (props) => {
  const {posters,title,subtitle,isDark,config}=props;
  const settings={
    infinite:true,
    speed:500,
    slidesToShow:5,
    slidesToScroll:4,
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:3,
          slidesToScroll:2,
        }
      },

      {
        breakpoint:600,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
        }
      },

    ]
  }
  return (
    <>
    {/* items-start-items start from left of the screen, items-end ->start from right of the screen*/}
    <div className='flex flex-col items-start sm:ml-3 my-2'>
      {/* if the dark bg then text should be white(?) bg-not darks(:) text-black */}
      <h3 className={`text-2xl font-bold ${isDark ? 'text-white' :'text-black'} `}>{title}</h3>

      <p className={`text-sm  ${isDark ? 'text-white' :'text-gray-800'}`}>{subtitle}</p>
    </div>

    {config && (
      <Slider {...config}>
      {/* ...each is props info in posters therefore in posterComponent props is present*/}
      {posters?.map((each,index)=>(
      <Poster {...each} isDark={isDark} key={index}/>))}
    </Slider>
    )}

    {!config && (
      <Slider {...settings}>
      {/* ...each is props info in posters therefore in posterComponent props is present*/}
      {posters?.map((each,index)=>(
      <Poster {...each} isDark={isDark} key={index}/>))}
    </Slider>
    )}
    </>
  )
}

export default PosterSlider
