import React from 'react'
import { Link } from 'react-router-dom'

export default function Secondhead() {
  return (
    <div className='second-head'>
      <Link to='/contractor/dashboard' style={{ textDecoration: 'none' }}><span>Dashboard</span></Link>
      <Link to='/contractor/projects' style={{ textDecoration: 'none' }}><span>Projects</span></Link>
      <Link to='/contractor/status_list' style={{ textDecoration: 'none' }}><span>My Bids</span></Link>
      <Link to='/contractor/bids_list' style={{ textDecoration: 'none' }}><span>RFQs</span></Link>
      <Link to='/contractor/finace' style={{ textDecoration: 'none' }}><span>Finance</span></Link>
    </div>
  )
}
