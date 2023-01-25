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
        email:"test2@test.com"
    }
}).then((response)=>response.json()).then((user)=>console.log(user.email))
    return (<>
            <h1>Hello {email}</h1>
    </>);
}

export default Dashboard;