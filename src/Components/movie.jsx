import React, { useState, useEffect } from "react";
import "./movie.css";



const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(()=>{


    try{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
    .then(res => res.json())
    .then (data =>setMovie (data.results,console.log(data.results,"---helo")))
    }catch (error) {
        console.error('Error:', error);
    }
  },[])
  return (
    <div className="movie-container">
      {movie.map((movieItem, id) => {
      return (
        <div className="movie-blocks" key={id}
        onMouseEnter={() => setHoveredIndex(id)}
        onMouseLeave={() => setHoveredIndex(null)}
        >
          
            <img style={{width:"100%",height:"60%",borderRadius:"5px"}} src={`https://image.tmdb.org/t/p/original/${movieItem.backdrop_path}`} ></img>
              
            <div className={`movie-details ${hoveredIndex === id ? 'show' : ''}`}>
              
                   <p>{movieItem.original_title}</p>     
                    <p>Rating: {movieItem.vote_average}</p>
                    <p>Language:{movieItem.original_language}</p>
                 
              
          </div>
        </div>
      );
    })}
    </div>
  );
};

export default Movies;
