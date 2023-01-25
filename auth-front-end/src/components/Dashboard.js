import React, { useState } from "react";

const Dashboard = ()=>{
const [email,setEmail]=useState(undefined);
const token = localStorage.getItem("AuthToken");
fetch('http://localhost:4000/secret',{
    headers:{
        'Content-Type':'application/json',
        "Authorization":token,
    },
    method:"GET",
    body:{
        
    }
}).then(response=>response.json()).then(response=>setEmail(response.email))
    return (<>
            <h1>Hello {email}</h1>
    </>);
}

export default Dashboard;