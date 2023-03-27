import React from 'react'
import { RegulatorDataGridUsers } from '../../components/BidDataGridRegulator'
import Sidebar from '../../components/Sidebar'

export default function Users() {
  return (
    <div className='regulator'>
      <Sidebar />
      <div className='regulator-main'>
        <div className="bid-header" style={{marginTop: 0}}>
          <h2 className='h2-padding'>All Users</h2>
          {/* <button className='add-event-button' onClick={[]}>Add New User</button> */}
        </div>
        <RegulatorDataGridUsers />
      </div>
      
    </div>
    
  )
}
