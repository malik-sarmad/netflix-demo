import React from "react";
import "./dashboard.css"
import Feature from "./Feature";
import Movies from "./movie";

const Dashboard = () =>{
    return(
        <>
        <Feature/>
        <div>
           <h2>Most Popular Movies</h2>
        </div>
        <Movies/>
        
        </>
    )
}
export default Dashboard;