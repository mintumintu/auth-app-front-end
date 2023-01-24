import React, { useState } from "react";

const Dashboard = ()=>{
const [email,setEmail]=useState(undefined);
fetch('http://localhost:4000/secret').then(response=>response.json()).then(response=>setEmail(response.email))
    return (<>
            <h1>Hello {email}</h1>
    </>);
}

export default Dashboard;