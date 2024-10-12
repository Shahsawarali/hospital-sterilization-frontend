import React, { useState } from 'react';
import './CounterStaff.css';

const CounterStaff = () => {
  const [showOrderReceivedOT, setShowOrderReceivedOT] = useState(false);
  const [showOrderDeliveredOT, setShowOrderDeliveredOT] = useState(false);
  const [showInstrumentsReceived, setShowInstrumentsReceived] = useState(false);
  const [showRecord, setShowRecord] = useState(false);

  const handleOrderReceivedOT = () => {
    setShowOrderReceivedOT(true);
    setShowOrderDeliveredOT(false);
    setShowInstrumentsReceived(false);
    setShowRecord(false);
  };

  const handleOrderDeliveredOT = () => {
    setShowOrderReceivedOT(false);
    setShowOrderDeliveredOT(true);
    setShowInstrumentsReceived(false);
    setShowRecord(false);
  };

  const handleInstrumentsReceived = () => {
    setShowOrderReceivedOT(false);
    setShowOrderDeliveredOT(false);
    setShowInstrumentsReceived(true);
    setShowRecord(false);
  };

  const handleShowRecord = () => {
    setShowOrderReceivedOT(false);
    setShowOrderDeliveredOT(false);
    setShowInstrumentsReceived(false);
    setShowRecord(true);
  };

  return (
    <div className="counter-staff">
      <h1>Counter Staff</h1>
      <div className="buttons-container">
        <button onClick={handleOrderReceivedOT}>Order Received From OT</button>
        <button onClick={handleOrderDeliveredOT}>Order Delivered to OT</button>
        <button onClick={handleInstrumentsReceived}>Instruments Received from Sterilization</button>
        <button onClick={handleShowRecord}>Show Record</button>
      </div>

      {/* Order Received from OT Form */}
      {showOrderReceivedOT && (
        <div className="order-form">
          <h2>Order Received from Operation Theater</h2>
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Quantity" />
          <div className="form-buttons">
            <button>Save</button>
            <button>Clear</button>
          </div>
        </div>
      )}

      {/* Order Delivered to OT Form */}
      {showOrderDeliveredOT && (
        <div className="order-delivered-form">
          <h2>Order Delivered to Operation Theater</h2>
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Quantity" />
          <div className="form-buttons">
            <button>Save/Update</button>
            <button>Clear</button>
          </div>
        </div>
      )}

      {/* Instruments Received from Sterilization Form */}
      {showInstrumentsReceived && (
        <div className="instruments-received-form">
          <h2>Instruments Received from Sterilization</h2>
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Quantity" />
          <div className="form-buttons">
            <button>Save/Update</button>
            <button>Clear</button>
          </div>
        </div>
      )}

      {/* Show Record */}
      {showRecord && (
        <div className="show-record">
          <h2>Items in Counter Storage</h2>
          <ul>
            {/* Example items */}
            <li>Item X - 15</li>
            <li>Item Y - 8</li>
            <li>Item Z - 25</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CounterStaff;