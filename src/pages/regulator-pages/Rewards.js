import React from 'react'
import { RegulatorDataGridAll } from '../../components/BidDataGridRegulator'
import Sidebar from '../../components/Sidebar'

export default function Rewards() {
    return (
        <div className='regulator'>
            <Sidebar />
            <div className='regulator-main'>
                <h2 className='h2-padding'>All Awards</h2>
                <RegulatorDataGridAll />
            </div>
        </div>

    )
}
