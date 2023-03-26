import React from 'react'
import { RegulatorDataGridAll, RegulatorDataGridPending, RegulatorDataGridRejected, RegulatorDataGridApproved } from '../../components/BidDataGridRegulator'
import Sidebar from '../../components/Sidebar'

export default function RegulatorBids() {
  return (
    <div className='regulator'>
      <Sidebar />
      <div className='regulator-main'>
        <h2 className='h2-padding'>Bids Pending Approval</h2>
        <RegulatorDataGridPending />
        <h2 className='h2-padding'>Rejected Bids</h2>
        <RegulatorDataGridRejected />
        <h2 className='h2-padding'>Approved Bids</h2>
        <RegulatorDataGridApproved />
        <div className="bid-header">
          <h2 className='h2-padding'>All Bids</h2>
          <button className='add-event-button' onClick={[]}>Add New Bid</button>
        </div>
        <RegulatorDataGridAll />
      </div>
      
    </div>
    
  )
}
