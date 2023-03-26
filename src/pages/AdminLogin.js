import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Adminregistration() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    navigate('/regulator');
  };
  
  return (
    <div className='login'> 
       <form className="form" target="_blank" onSubmit={handleSubmit}>
          <h2>REGULATOR LOGIN</h2>
          <input type="email" name="Email" placeholder="Email" className="input" required/><br />
          <input type="password" name="Password" placeholder="Password" className="input" required/><br />
          <button className="btn" type="submit">Submit</button>
        </form>
    </div>
  )
}
