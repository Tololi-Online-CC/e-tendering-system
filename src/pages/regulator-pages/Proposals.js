import React from "react";
import Sidebar from "../../components/Sidebar";
import { RegulatorDataGridAll, RegulatorDataGridPending, RegulatorDataGridRejected, RegulatorDataGridAwarded, RegulatorDataGridApproved } from '../../components/BidDataGridRegulator'
import { useState } from "react";

export default function RegulatorProposals() {
    const [selectedComponent, setSelectedComponent] = useState("");

    const handleSelection = (component) => {
        setSelectedComponent(component);
    };
    function NavigateContracts() {
        return (
            <div style={{ paddingLeft: "20px" }}>
                <a className="filter-a" onClick={() => handleSelection("Pending")}>Pending</a>
                <a className="filter-a" onClick={() => handleSelection("Rejected")}>Rejected</a>
                <a className="filter-a" onClick={() => handleSelection("Awarded")}>Awarded</a>
            </div>
        );
    }
    switch (selectedComponent) {
        case "Pending":
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <h2 className='h2-padding'>Awards Pending Approval</h2>
                        <NavigateContracts />
                        <RegulatorDataGridPending />
                    </div>
                </div>
            );
        case "Rejected":
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <h2 className='h2-padding'>Awards Rejected</h2>
                        <NavigateContracts />
                        <RegulatorDataGridRejected />
                    </div>
                </div>
            );
        case "Awarded":
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <h2 className='h2-padding'>Awarded</h2>
                        <NavigateContracts />
                        <RegulatorDataGridAwarded />
                    </div>
                </div>
            );
        default:
            return (
                <div className="regulator">
                    <Sidebar />
                    <div className="regulator-main">
                        <h2 className='h2-padding'>Awards Pending Approval</h2>
                        <NavigateContracts />
                        <RegulatorDataGridPending />
                    </div>
                </div>
            );
    }
}

