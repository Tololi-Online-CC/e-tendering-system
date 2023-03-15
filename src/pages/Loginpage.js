import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Loginpage() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    navigate('/contractor/dashboard');
  };
  
  return (
    <div className='login'> 
       <form className="form" target="_blank" onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <input type="email" name="Email" placeholder="Email" className="input" required/><br />
          <input type="password" name="Password" placeholder="Password" className="input" required/><br />
          <button className="btn" type="submit">Submit</button>
        </form>
        <Link to={'/register'} className='link' style={{margin: 0}}>Register</Link>
    </div>
  )
}
