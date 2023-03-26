import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from './regulator-pages/Dashboard'

export default function Regulatorpage() {
 
  
  return (
    <div className='regulator'>
      <Sidebar />
      <div className='regulator-main'>
        <Dashboard />
      </div>
    </div>
  )
}
