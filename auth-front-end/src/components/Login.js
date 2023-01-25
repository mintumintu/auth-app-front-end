import "./Login.css";
import { useState } from "react";
import { redirect } from "react-router-dom";
import Dashboard from "./Dashboard";

function Login() {
//   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   let res = await fetch("http://localhost:4000/login", {
    //     headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //     method: "POST",
    //     body: JSON.stringify({
    //     //   name: name,
    //       email: email,
    //       password: password,
    //     }),
    //   });
    //   // let resJson = await res.json();
    //   if (res.status === 200) {
    //     console.log(res.json());
    //     // localStorage.setItem("AuthToken",res.token);
    //     redirect('/Dashboard')
    //   } else {
    //     setMessage("Some error occured");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    fetch("http://localhost:4000/login", {
        headers: {
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }).then((response)=>response.json()).then((token)=>localStorage.setItem("AuthToken",token));


  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        /> */}
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Login;