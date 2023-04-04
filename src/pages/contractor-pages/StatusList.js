import React from "react";
import { RegulatorDataGridAll, RegulatorDataGridPending, RegulatorDataGridRejected, RegulatorDataGridApproved } from '../../components/BidDataGridRegulator'
import { useState } from "react";
import Secondhead from "../../components/Secondhead";

export default function StatusList() {
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
        <span className="filter-a" onClick={() => handleSelection("AllBids")}>All Bids</span>
      </div>
    );
  }
  switch (selectedComponent) {
    case "Pending":
      return (
        <div>
          <Secondhead />
          <div>
            <h2 className='h2-padding'>Bids Pending Approval</h2>
            <NavigateContracts />
            <RegulatorDataGridPending />
            <br/>
          </div>
        </div>
      );
    case "Approved":
      return (
        <div>
          <Secondhead />
          <div>
            <h2 className='h2-padding'>Bids Approved</h2>
            <NavigateContracts />
            <RegulatorDataGridApproved />
            <br/>
          </div>
        </div>
      );
    case "Rejected":
      return (
        <div>
          <Secondhead />
          <div>
            <h2 className='h2-padding'>Bids Rejected</h2>
            <NavigateContracts />
            <RegulatorDataGridRejected />
            <br/>
          </div>
        </div>
      );
    case "AllBids":
      return (
        <div>
          <Secondhead />
          <div>
            <h2 className='h2-padding'>All Bids</h2>
            <NavigateContracts />
            <RegulatorDataGridAll />
            <br/>
          </div>
        </div>
      );
    default:
      return (
        <div>
          <Secondhead />
          <div>
            <h2 className='h2-padding'>Bids Pending Approval</h2>
            <NavigateContracts />
            <RegulatorDataGridPending />
            <br/>
          </div>
        </div>
      );
  }
}

