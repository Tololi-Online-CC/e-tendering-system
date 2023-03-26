import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Sidebar() {
  let navigate = useNavigate()
  const buttonClick = () => {
		navigate('/admin');
	}
  let background = {
    borderBottom: '1px solid #111111',
  }

  return (
    <div className='regulator-sidebar'>
      <div>
        <Link to='/regulator' style={(window.location.pathname === '/regulator')? background = {borderBottom: '1px solid #ffc90a'}: background = {backgroundColor: '#111111'}}>Dashboard</Link>
        <Link to='/regulator/analytics' style={(window.location.pathname === '/regulator/analytics')? background = {borderBottom: '1px solid #ffc90a'}: background = {backgroundColor: '#111111'}}>Analytics</Link>
        <Link to='/regulator/bids' style={(window.location.pathname === '/regulator/bids')? background = {borderBottom: '1px solid #ffc90a'}: background = {backgroundColor: '#111111'}}>Bids</Link>
        <Link to='/regulator/rewards' style={(window.location.pathname === '/regulator/rewards')? background = {borderBottom: '1px solid #ffc90a'}: background = {backgroundColor: '#111111'}}>Awards</Link>
        <Link to='/regulator/proposals' style={(window.location.pathname === '/regulator/proposals')? background = {borderBottom: '1px solid #ffc90a'}: background = {backgroundColor: '#111111'}}>Proposals</Link>
        <Link to='/regulator/users' style={(window.location.pathname === '/regulator/users')? background = {borderBottom: '1px solid #ffc90a'}: background = {backgroundColor: '#111111'}}>Users</Link>
        {/* <Link to='/regulator/bids'>Administration</Link> */}
      </div>
      <button className="btn" onClick={buttonClick}>Log-Out</button>
    </div>
  )
}
