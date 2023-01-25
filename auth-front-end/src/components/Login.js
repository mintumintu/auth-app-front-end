import "./Login.css";
import { useState } from "react";

function Login() {
//   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/login", {
        headers: {
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }).then((response)=>response.json()).then((token)=>localStorage.setItem('Authorization',token));
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
      </form>
    </div>
  );
}

export default Login;