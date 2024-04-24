import React from "react";
import "./Faq.css";

const Faq =() =>{
    return(
        <div>
          <div className="faq-container">
             <div>
                 <h1>What is Netflix?</h1>              
            </div>
               <div>
                     <div className="img-faq-div">
                        <img className="img-faq" style={{width:"100%",borderRadius:"2%"}} src="stranger.png" alt="example"/>
                     </div>
                     <div className="faq-p">
                           <p>Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device.</p>

                     </div>
                     <div className="faq-p">
                        <p>Depending on your plan, you can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.</p>
                     </div>
                     <div className="faq-p">
                        <p>If you're already a member and would like to learn more about using Netflix, visit Getting started with Netflix.</p>
                     </div>

               </div>
               <div className="faq-seprator"></div>
               <div>
                    <h3>TV Shows & Movies</h3>
                    <div className="img-faq-div">
                        <img className="img-faq" src="netflix.png" alt="example"/>
                    </div>
                    <div className="faq-p">
                        <p>Netflix content varies by region and may change over time. You can watch a variety of award-winning Netflix originals, TV shows, movies, documentaries, and more.</p>
                    </div>
                    <div className="faq-p">
                        <p>The more you watch, the better Netflix gets at recommending TV shows and movies.</p>
                    </div>
               </div>
               <div className="faq-seprator"></div>
               <div>
                    <h3>Supported Devices</h3>
                    <div className="img-faq-div">
                        <img className="img-faq" src="support.png" alt="example"/>
                    </div>
                    <div className="faq-p">
                        <p>You can watch Netflix through any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance. </p>
                    </div>
                    <div className="faq-p">
                        <p>Need help getting set up? Search our Help Center for the manufacturer of the device you're using.</p>
                    </div>
                  </div>
               <div className="faq-seprator"></div>
               <div>
                    <h3>Plans and Pricing</h3>
                    <div className="img-faq-div">
                        <img className="img-faq" src="plans.png" alt="example"/>
                    </div>
                    <div className="faq-p">
                        <p>Each Netflix plan determines the number of devices you can watch Netflix on at the same time and whether you can watch in High Definition (HD), Full High Definition (FHD), or Ultra High Definition (UHD).</p>
                    </div>
                    <div className="faq-p">
                        <p>You can change your plan or cancel online at any time.</p>
                    </div>
                  </div>
                  <div className="faq-seprator"></div>
                  <div>
                      <h3>Get Started</h3>
                       <div className="img-faq-div">
                          <img className="img-faq" src="started.png" alt="example"/>
                        </div>
                        <div className="faq-p">
                            <p>1:Visit netflix.com/signup.</p>
                            <p>2:Choose a plan.</p>
                            <p>3:Create an account by entering your email address and creating a password.</p>
                            <p>4:Enter a payment method.</p>
                     </div>
                      <div className="faq-p">
                            <p>As a Netflix member, you are charged once a month on the date you signed up. </p>
                        </div>
                   </div>
                   <div className="faq-seprator"></div>
          </div>   
        </div>  
    )
}
export default Faq;