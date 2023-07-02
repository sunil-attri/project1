import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
// import {sessionStorage} from ''

const LoginPage = ({handleToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Login button clicked');
    console.log('Email:', email);
    console.log('Password:', password);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: email,password:password })
    }
    
    const res=await fetch(`${process.env.REACT_APP_ENDPOINT}/login`,requestOptions);
  
    const ans=await res.json()
    console.log(ans);

    if(ans.valid){
      sessionStorage.setItem("loginID",ans.token)
      handleToken(ans.token);
      navigate("/status")
    }
    else{
      alert("invalid password")
    }
  };

  return (
    <div>
     <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
