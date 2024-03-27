import React, { useEffect, useState } from "react";
import axios from "axios";


// Layout HOC
import DefaultLayoutHoc from "../layout/DefaultLayout";

// components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCardComponent";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselComponent";
import PosterSlider from "../components/PosterSlider/PosterSliderComponent";


const HomePage=()=>{
    const [recomendedMovies,setrecomendedMovies]=useState([]);
    const [premierMovies,setpremierMovies]=useState([]);
    const [onlineStreamEvents,setonlineStreamEvents]=useState([]);

  
    useEffect(()=>{
        const requestPopularMovies=async()=>{
            const getPopularMovies=await axios.get("/movie/popular");
            setpremierMovies(getPopularMovies.data.results);
    }
        requestPopularMovies();
    },[])

      useEffect(()=>{
    const requestTopRatedMovies=async()=>{
        const getTopRatedMovies=await axios.get("/movie/top_rated");
        
        // movies are under results under data
        setrecomendedMovies(getTopRatedMovies.data.results)
    }
    requestTopRatedMovies();
    },[]);

    useEffect(()=>{
        const requestUpcomingMovies=async()=>{
            const getUpcomingMovies=await axios.get("/movie/upcoming");
            setonlineStreamEvents(getUpcomingMovies.data.results);
        }
        requestUpcomingMovies();
    },[])


    return (
        <>
        <HeroCarousel/>
        <div className="container mx-auto px-4 md:px-12 my-8">
            <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The best of Entertainment</h1>
            <EntertainmentCardSlider/>
        </div>

        <div className="container mx-auto px-4 md:px-12 my-8">
            <PosterSlider title="Recomended Movies" subtitle="List of recommended movies" posters={recomendedMovies}
            isDark={false}
            />
        </div>

        <div className="bg-premier-800 py-12">
            <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                {/* on large screen size it is hidden only on medium size it is displayed */}
                <div className="hidden md:flex">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" className="w-full h-full" alt="Rupay" />
                </div>

                <PosterSlider
                title="Premiers"
                subtitle="Brand new release every Friday"
                posters={premierMovies}
                isDark={true}/>
            </div>
        </div>

        <div className=" container mx-auto px-4 md:px-12 my-8 ">
            <PosterSlider
            title="Online Streaming Events"
            subtitle="Online Stream Events"
            posters={onlineStreamEvents}
            isDark={false}
            />

        </div>
        </>
    )
}
export default DefaultLayoutHoc(HomePage);