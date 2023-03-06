import React from 'react'
import { Link } from 'react-router-dom'

export default function Secondhead() {
  return (
    <div className='second-head'>
      <Link to='/operator/dashboard' style={{ textDecoration: 'none' }}><span>Dashboard</span></Link>
      <Link to='/operator/projects' style={{ textDecoration: 'none' }}><span>Projects</span></Link>
      <Link to='/operator/status_list' style={{ textDecoration: 'none' }}><span>Proposal Status</span></Link>
      <Link to='/operator/bids_list' style={{ textDecoration: 'none' }}><span>Bids</span></Link>
      <Link to='/operator/contracts' style={{ textDecoration: 'none' }}><span>Contracts</span></Link>
      <Link to='/operator/finace' style={{ textDecoration: 'none' }}><span>Finance</span></Link>
    </div>
  )
}
