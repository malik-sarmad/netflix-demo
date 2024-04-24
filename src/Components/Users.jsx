// Users.js
import React, { useContext } from 'react';
import "./User.css"
import { AdduserContext } from './adduserContext';

const Users = () => {
  const { userData } = useContext(AdduserContext);

  return (
    <div style={{width:"100%",height:"auto"}}>
      <h2 style={{textAlign:"center"}}>Users</h2>
      <div className="container-user"> 
      {userData.map((users, index) => (
            <div className="User-blocks">
               
                     <h5>Email: {users.email}</h5> 
                     <h5> Password: {users.password}</h5> 
                
          </div>
        ))}
        

      </div>
      
       
        
     
    </div>
  );
};

export default Users;
