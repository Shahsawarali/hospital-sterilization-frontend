import React, { useState } from 'react';
import './SterilizationStaff.css';

const SterilizationStaff = () => {
  const [showPacketReceived, setShowPacketReceived] = useState(false);
  const [showItemsSentToCounter, setShowItemsSentToCounter] = useState(false);
  const [showRecord, setShowRecord] = useState(false);

  const handlePacketReceived = () => {
    setShowPacketReceived(true);
    setShowItemsSentToCounter(false);
    setShowRecord(false);
  };

  const handleItemsSentToCounter = () => {
    setShowPacketReceived(false);
    setShowItemsSentToCounter(true);
    setShowRecord(false);
  };

  const handleShowRecord = () => {
    setShowPacketReceived(false);
    setShowItemsSentToCounter(false);
    setShowRecord(true);
  };

  return (
    <div className="sterilization-staff">
      <h1>Sterilization Staff</h1>
      <div className="buttons-container">
        <button onClick={handlePacketReceived}>Packet Received from OT</button>
        <button onClick={handleItemsSentToCounter}>Items Sent to Counter</button>
        <button onClick={handleShowRecord}>Show Record</button>
      </div>

      {/* Packet Received from OT Form */}
      {showPacketReceived && (
        <div className="packet-received-form">
          <h2>Packet Received from Operation Theater</h2>
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Quantity" />
          <div className="category-select">
            <label>Category:</label>
            <select>
              <option value="correct">Correct</option>
              <option value="damaged">Damaged</option>
              <option value="need-repair">Need Repair</option>
            </select>
          </div>
          <div className="form-buttons">
            <button>Save/Update</button>
            <button>Clear</button>
          </div>
        </div>
      )}

      {/* Items Sent to Counter Form */}
      {showItemsSentToCounter && (
        <div className="items-sent-counter-form">
          <h2>Items Sent to Counter</h2>
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Quantity" />
          <div className="form-buttons">
            <button>Save</button>
            <button>Clear</button>
          </div>
        </div>
      )}

      {/* Show Record */}
      {showRecord && (
        <div className="show-record">
          <h2>Record of Items</h2>
          <h3>Correct Items</h3>
          <ul>
            <li>Item X - 15</li>
            <li>Item Y - 8</li>
          </ul>
          <h3>Damaged Items</h3>
          <ul>
            <li>Item A - 3</li>
            <li>Item B - 6</li>
          </ul>
          <h3>Items Needing Repair</h3>
          <ul>
            <li>Item R - 2</li>
            <li>Item Q - 4</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SterilizationStaff;
