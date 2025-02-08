import React from "react";

function Login(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    // Use fetch to POST to your backend login endpoint
    const res = await fetch("http://127.0.0.1:8080/api/clickJackLab1-account", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data),
    });
    if (res.ok) {
      props.history.push("/Click_Jacking/EditInfo");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
