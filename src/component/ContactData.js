import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AppContext } from "../store/Context";
import './ContactData.css'


function ContactData(){

    const {apidata} = useContext(AppContext) //fetching data from store

   
    return(
      <>
       <center>
        <h1>Details</h1>
       </center>

       {/* MAPPING API ARRAY */}
       {apidata.map((currentData )=>{
         const {name , username, address  , id} = currentData;
         console.log(id ,"id");
       return (
       
            <>
              
             <div className="card-container">
               
                     <div className="name-section">
                    <h5>{name}</h5>
                </div>

                <div className="user-detail">
                    
                    <div>
                        <h4>Contact</h4>
                        <p>{username}</p>
                    </div>

                    <div>
                        <h4>CITY</h4>
                        <p>{address.city}</p>
                    </div>

                    <div>
                        <h4>STATE</h4>
                        <p>{address.street}</p>                       
                    </div>

                    <div>
                        {/* USED NAVLINK FOR GOING USER DETAIL PAGE */}
                       <NavLink className="viewdetail" to={`/users/${id}`} key = {id} >
                         view detail
                       </NavLink>
                    </div>

                </div>
             </div>
            </>
        
       )})}
      </>
    )
  }
  
  export default ContactData;