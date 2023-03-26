import React from 'react'
import { RegulatorDataGridAll, RegulatorDataGridPending, RegulatorDataGridRejected, RegulatorDataGridApproved } from '../../components/BidDataGridRegulator'
import Sidebar from '../../components/Sidebar'

export default function RegulatorProposals() {
  return (
    <div className='regulator'>
      <Sidebar />
      <div className='regulator-main'>
        <h2 className='h2-padding'>Proposals Pending Approval</h2>
        <RegulatorDataGridPending />
        <h2 className='h2-padding'>Rejected Proposals</h2>
        <RegulatorDataGridRejected />
        <h2 className='h2-padding'>Approved Proposals</h2>
        <RegulatorDataGridApproved />
        <h2 className='h2-padding'>All Proposals</h2>
        <RegulatorDataGridAll />
      </div>

    </div>

  )
}
