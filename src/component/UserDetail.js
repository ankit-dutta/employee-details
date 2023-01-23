import {  useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom"
import './UserDetail.css';

const UserDetail = (props) =>{

    const navigate = useNavigate()
    const {id} = useParams(); //using params to get the id number

    const [userdetail, setUserDetail] = useState([])

    // console.log(props.key , "props.key")

   const apidata = `https://jsonplaceholder.typicode.com/users/${id}`;



    const getData = async(url) =>{
        try{
            const res = await fetch(url)
            const data = await res.json()
            setUserDetail(data);
           
        }

        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData(apidata)
        console.log(apidata , 'userdetail')

    },[])

const backbtnHandler =() =>{
  navigate('/employee-details')
}

    return (
        <>
         <div className="profile-container">
         <button className="back-btn" onClick={backbtnHandler}>Back</button>

            {/* HEADING SECTION START */}
            <div className="profile-heading">
              <h1><i> Name : <span>{userdetail.name}</span></i></h1> 
            </div>
            {/* HEADING SECTION END */}


            <hr />


            {/* DESCRIPTION SECTION  START */}

            <div className="user-about-section"> 
               <div className="description">
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              


           <div className="personal-detail">
                <div>
                    <h3>Contact Person</h3>
                    <p>{userdetail.username}</p>

                    <h3>Company Name</h3>
                    {/* <p>{userdetail.company.name}</p> */}

                    <h3>Email</h3>
                    <p>{userdetail.email}</p>

                    <h3>Company Website</h3>
                    <p>{userdetail.website}</p>
                </div>

                <div>
                <h3>Address</h3>
                    {/* <p>{userdetail.address.street}, {userdetail.address.zipcode}</p> */}

                    <h3>City</h3>
                    {/* <p>{userdetail.address.city}</p> */}

                    <h3>State</h3>
                    {/* <p>{userdetail.address.suite}</p> */}

                    <h3>Contact Us</h3>
                    <p>{userdetail.phone}</p>

                </div>

          </div>
           
         </div>
        {/* DESCRIPTION SECTION  END */}

   
         </div>
        </>
    )
}

export default UserDetail;