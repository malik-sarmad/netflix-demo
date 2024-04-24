import React, { useState,useContext } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { AdduserContext } from './adduserContext';
import { useNavigate } from "react-router-dom";

const Signup = () => {
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [user, setUser] = useState([]);\
  const navigate = useNavigate()

  const [showMore, setShowMore] = useState(false);
  const { addUser } = useContext(AdduserContext);
  const handleUser = (e) => {
   e.preventDefault();
    const newUser = {
      email: email,
      password: password
    };
   // setUser([...user, newUser]);
    addUser(newUser);
    setEmail("");
    setPassword("");
    navigate("/dashboard")
  };

  return (
    <div className="main-container">
      
     
      <div className="header">
        <Link to="/">
          <span>
            <img
              style={{ width: "150px" }}
              src="net.png"
              alt="example"
            />
          </span>
        </Link>
      </div>
      <div className="sign-up-main">
        <div className="signup">
          <h2 className="h2-signup">Sign up</h2>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter Your Email"
            />
          </div>
          <div style={{ padding: "40px 0px 40px 0px" }}>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter Your Password"
            />
          </div>
          <div>
            <button onClick={handleUser} className="btn-sign">
              Sign In
            </button>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "20px 0px 0px 0px",
              cursor: "pointer"
            }}
          >
            <span>Forgot Password?</span>
          </div>
          <div style={{ color: "gray", fontSize: "12px" }}>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not
              a bot.{" "}
              <span
                onClick={() => setShowMore(!showMore)}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Learn more
              </span>
            </p>
            {showMore && (
              <p>
                The information collected by Google reCAPTCHA is subject to
                the Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalized
                advertising by Google).
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
