import './App.css'
import axios from 'axios';
// import dotenv from "dotenv"

// Routers
import { Routes,Route } from 'react-router-dom';

// React Slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import PlayPage from './pages/PlayPage';

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=import.meta.env.REACT_APP_API_KEY;

function App() {
  console.log( import.meta.env.REACT_APP_API_KEY)
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='movie/:id' element={<MoviePage/>}/>
      <Route path='plays' element={<PlayPage/>}/>

    </Routes>
  
  )
}

export default App
