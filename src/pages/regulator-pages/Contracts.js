import React from "react";
import Sidebar from "../../components/Sidebar";
import { RegulatorDataGridAll, RegulatorDataGridPending, RegulatorDataGridRejected, RegulatorDataGridAwarded, RegulatorDataGridApproved } from '../../components/BidDataGridRegulator'
import { useState } from "react";

export default function RegulatorContracts() {
    const [selectedComponent, setSelectedComponent] = useState("");

    const handleSelection = (component) => {
        setSelectedComponent(component);
    };
    function NavigateContracts() {
        return (
            <div style={{ paddingLeft: "20px" }}>
                <a className="filter-a" onClick={() => handleSelection("Pending")}>Pending</a>
                <a className="filter-a" onClick={() => handleSelection("Approved")}>Approved</a>
                <a className="filter-a" onClick={() => handleSelection("Rejected")}>Rejected</a>
                {/* <a className="filter-a" onClick={() => handleSelection("Awarded")}>Awarded</a> */}
                <a className="filter-a" onClick={() => handleSelection("AllBids")}>All Bids</a>
            </div>
        );
    }
    switch (selectedComponent) {
        case "Pending":
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <h2 className='h2-padding'>Bids Pending Approval</h2>
                        <NavigateContracts />
                        <RegulatorDataGridPending />
                    </div>
                </div>
            );
        case "Approved":
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <h2 className='h2-padding'>Bids Approved</h2>
                        <NavigateContracts />
                        <RegulatorDataGridApproved />
                    </div>
                </div>
            );
        case "Rejected":
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <h2 className='h2-padding'>Bids Rejected</h2>
                        <NavigateContracts />
                        <RegulatorDataGridRejected />
                    </div>
                </div>
            );
        // case "Awarded":
        //     return (
        //         <div className="regulator">
        //             <Sidebar />
        //             <div className="regulator-main">
        //                 <h2 className='h2-padding'>Bids Awarded</h2>
        //                 <NavigateContracts />
        //                 <RegulatorDataGridAwarded />
        //             </div>
        //         </div>
        //     );
        case "AllBids":
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <div className="bid-header">
                            <h2 className='h2-padding'>All Bids</h2>
                            <button className='add-event-button' onClick={[]}>Add New Bid</button>
                        </div>
                        <NavigateContracts />
                        <RegulatorDataGridAll />
                    </div>
                </div>
            );
        default:
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <h2 className='h2-padding'>Bids Pending Approval</h2>
                        <NavigateContracts />
                        <RegulatorDataGridPending />
                    </div>
                </div>
            );
    }
}

