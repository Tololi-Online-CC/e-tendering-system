import React from 'react'
import { Link } from 'react-router-dom'

export default function Secondhead() {
  return (
    <div className='second-head'>
      <Link to='/contractor/dashboard' style={{ textDecoration: 'none' }}><span>Dashboard</span></Link>
      <Link to='/contractor/projects' style={{ textDecoration: 'none' }}><span>Projects</span></Link>
      <Link to='/contractor/status_list' style={{ textDecoration: 'none' }}><span>Proposal Status</span></Link>
      <Link to='/contractor/bids_list' style={{ textDecoration: 'none' }}><span>Bids</span></Link>
      <Link to='/contractor/contracts' style={{ textDecoration: 'none' }}><span>Contracts</span></Link>
      <Link to='/contractor/finace' style={{ textDecoration: 'none' }}><span>Finance</span></Link>
    </div>
  )
}
