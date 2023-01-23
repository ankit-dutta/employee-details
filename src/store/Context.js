import React, { useEffect, useState } from "react";

const API_URL = `https://jsonplaceholder.typicode.com/users`

const AppContext = React.createContext();


const AppProvider = ({children}) =>{

    // const [isLoading, setLoading] = (true)
    const [apidata, setapidata] = useState([])


    const fetchData = async(url) =>{
        try{
            const res = await fetch(url)
            const data = await res.json()
            setapidata(data);
           
        }

        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData(API_URL)
    },[])


    return(
        <AppContext.Provider value = {{apidata}}>
            {children}
        </AppContext.Provider>
    )
}


export {AppContext, AppProvider}

