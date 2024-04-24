import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <div>


        <div className="container">
          <div className="header">
             <span><img style={{width:"150px"}} src="net.png" alt="example" /></span>
               <div style={{padding:"20px 100px 0px 0px"}}>
                  <Link to="signup"> <span><button className="sign-btn">Sign In</button> </span></Link>
                </div>
           </div>
           <div className="email-div">
               <div>
                  <h1 className="email-h1">Unlimited movies, TV shows, and more</h1>
                  <p className="text-p">Watch anywhere. Cancel anytime.</p>
                   <p className="text-p">Ready to watch? Enter your email to create or restart your membership.</p>
               </div>
               <div className="input-div">
                   <input className="input" placeholder="Email Address"/>
                   <div style={{padding:"0px 0px 0px 20px"}}>
                   <button className="btn-red2">Get Started</button>

                   </div>
                   
               </div>

           </div>
        </div>
           <div style={{width: "100%", height: "10px", backgroundColor: "rgb(46,44,44)",color:"gray"}}></div>
             <section className="flex-box">
                      <div >
                      <h1 style={{fontSize:"50px"}}>Enjoy on your TV</h1> 
                      <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                      </div>
                      <div className="sec-img">
                        <img style={{padding:"0px 0px 0px 30px"}} src="tv.png" alt="examples" />   
                          <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay loop muted> </video> 
                      </div>  
             </section>
             <div className="seprator"></div>
         <section className="flex-box">
            <img style={{width:"50%",padding:"0px 50px 0px 0px"}} src="mobile.jpg" alt="example"/>
          
            <div>
                <h1 style={{fontSize:"50px"}}>Download your shows to watch offline</h1>
                <p style={{fontSize:"30px"}}>Save your favorites easily and always have something to watch.</p>
            </div>
         </section>
         <div className="seprator"></div>
                  <section style={{padding:"0px 0px 40px 150px"}}>
                     <div style={{fontSize:"30px", width:"40px"}}>
                        <h1>Watch everywhere</h1>
                     </div>
                        <div style={{width:"40%"}}>
                          <p style={{fontSize:"30px"}}>
                              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                            </p>
                       </div>
                 
                    </section> 
                    <div className="seprator"></div>

                    <section className="flex-box">
                        <img style={{width:"50%",padding:"0px 50px 0px 0px"}} src="kids.png" alt="example"/>
                       <div>
                       <h1 style={{fontSize:"50px"}}>Create profiles for kids</h1>
                        <p style={{fontSize:"25px"}}>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>
                 </section>
                 <div className="seprator"></div>

                 <section className="faq">
                    <h2 style={{fontSize:"50px",textAlign:"center"}}>Frequently Asked Questions</h2>
                    <div className="faq-box">
                    <div className="box">
                        
                        <span>What is Netflix?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>

                    </div>
                    </div>
                    <div className="faq-box">
                      <div className="box">
                           <span>How much does Netflix cost?</span>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                  <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </div>
                    </div>
                    <div className="faq-box">
                       <div className="box">
                           <span>Where can I watch</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                 <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </div>
                    </div>
                    <div className="faq-box">
                       <div className="box">
                           <span>How do I cancel</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="40" color="#000000" fill="none">
                                    <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>

                        </div>


                    </div>
                   
                 </section>
                 <div className="seprator"></div>

 
        

        </div> 
    )
}
export default Home;