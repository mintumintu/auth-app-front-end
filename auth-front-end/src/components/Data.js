import React, { useEffect, useState } from "react";

const Data = ()=>{
    const [useremail,setUserEmail]= useState('dummyemail@dummy.com')
    const [username,setUserName]= useState('dummyname');
    const AuthToken= 'Authorization';
    const token = localStorage.getItem(AuthToken);
    try{   
    fetch('http://localhost:4000/data',{
        headers:{
            'Content-Type':'application/json',
             Authorization:token,
        },
        method:"GET"
        })
        .then((response)=>response.json())
        .then((data)=>{
            setUserEmail(data.email);
            setUserName(data.name);
        });
    }catch(error){
        console.log(error);
    }
    return(
    <>
    <h1>Hello {useremail}</h1>
    <h2>Hi {username}</h2>
    </>
    );
}
export default Data;