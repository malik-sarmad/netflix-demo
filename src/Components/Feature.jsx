import React from "react";
import "./Feature.css"
const Feature = () =>{
    return(
        <>
          <div className="movie-content">
           <div className="banner">
             <h1 className="movie-title">Money Hiest</h1>
           <div>
          <button className="banner-button">Play</button>
           <button className="banner-button">My list</button>
      
          </div> 
          <div style={{width:"50%",paddingLeft:"20px",paddingBottom:"20px"}}>
          <p>{`Good news for Money Heist fans. The team behind the hit Spanish show has officially completed filming for the fourth season, just under a month after season three was uploaded on Netflix.`}</p>
          </div>
       
        </div>
       
      </div>
  
        </>
    )
}
export default Feature;