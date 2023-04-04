import React from "react";
import Sidebar from "../../components/Sidebar";
import { RegulatorDataGridAll, RegulatorDataGridPending, RegulatorDataGridRejected, RegulatorDataGridApproved } from '../../components/BidDataGridRegulator'
import { useState } from "react";

export default function RegulatorContracts() {
    const [selectedComponent, setSelectedComponent] = useState("");

    const handleSelection = (component) => {
        setSelectedComponent(component);
    };
    function NavigateContracts() {
        return (
            <div style={{ paddingLeft: "20px" }}>
                <span className="filter-a" onClick={() => handleSelection("Pending")}>Pending</span>
                <span className="filter-a" onClick={() => handleSelection("Approved")}>Approved</span>
                <span className="filter-a" onClick={() => handleSelection("Rejected")}>Rejected</span>
                <span className="filter-a" onClick={() => handleSelection("AllBids")}>All RFQs</span>
            </div>
        );
    }
    switch (selectedComponent) {
        case "Pending":
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <h2 className='h2-padding'>RFQs Pending Approval</h2>
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
                        <h2 className='h2-padding'>RFQs Approved</h2>
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
                        <h2 className='h2-padding'>RFQs Rejected</h2>
                        <NavigateContracts />
                        <RegulatorDataGridRejected />
                    </div>
                </div>
            );
        case "AllBids":
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <div className="bid-header">
                            <h2 className='h2-padding'>All RFQs</h2>
                            <button className='add-event-button' onClick={[]}>Add New RFQ</button>
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
                        <h2 className='h2-padding'>RFQs Pending Approval</h2>
                        <NavigateContracts />
                        <RegulatorDataGridPending />
                    </div>
                </div>
            );
    }
}

