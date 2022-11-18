import { useState, useEffect } from "react"
import React from 'react'
import {useLocation} from "react-router-dom"

function MovieDetails(props) {
  const [theMovieDetails, setTheMovieDetails] = useState({})
  console.log(`Starting`);
  
  const search = useLocation().search;
  const movieID = new URLSearchParams(search).get("movieID");
  
  const fetchMovieDetailsById = (imdbId) => {
    const detailsurl = `https://www.omdbapi.com/?i=${imdbId}&apikey=2c2e69a0`

    fetch(detailsurl)
      .then((response) => response.json())
      .then((result) => {
        setTheMovieDetails(result)
      })
  }

  useEffect(() => {
    

    console.log('About to render');
    console.log(movieID);
    
    fetchMovieDetailsById(movieID)
    console.log("Using Effect");
  }, [])	
  

  return (
    <div className="details">
        <div className="hMovie">
        <h1>Movie details</h1>
        </div>
    <div className="page">
        
      <img src={theMovieDetails.Poster} alt='MoviePoster' />
      </div>
      <div className="text">
      <p>Title: {theMovieDetails.Title}</p>
      <p>Plot: {theMovieDetails.Plot}</p>
      <p>Director: {theMovieDetails.Director}</p>
      <p>Released: {theMovieDetails.Released}</p>
      </div>
      </div>
  
    
  )
}

export default MovieDetails
