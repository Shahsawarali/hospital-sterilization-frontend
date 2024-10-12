import React, { useState } from 'react';
import './OperationTheaterStaff.css';

const OperationTheaterStaff = () => {
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const [showOrderReceived, setShowOrderReceived] = useState(false);
  const [showRecord, setShowRecord] = useState(false);

  const handlePlaceOrder = () => {
    setShowPlaceOrder(true);
    setShowOrderReceived(false);
    setShowRecord(false);
  };

  const handleOrderReceived = () => {
    setShowPlaceOrder(false);
    setShowOrderReceived(true);
    setShowRecord(false);
  };

  const handleShowRecord = () => {
    setShowPlaceOrder(false);
    setShowOrderReceived(false);
    setShowRecord(true);
  };

  return (
    <div className="operation-theater">
      <h1>Operation Theater Staff</h1>
      <div className="buttons-container">
        <button onClick={handlePlaceOrder}>Place Order</button>
        <button onClick={handleOrderReceived}>Order Received</button>
        <button onClick={handleShowRecord}>Show Record</button>
      </div>

      {/* Place Order Form */}
      {showPlaceOrder && (
        <div className="order-form">
          <h2>Place Order</h2>
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Quantity" />
          <div className="form-buttons">
            <button>Save</button>
            <button>Clear</button>
          </div>
        </div>
      )}

      {/* Order Received Form */}
      {showOrderReceived && (
        <div className="order-received-form">
          <h2>Order Received</h2>
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
          <h2>Items in Operation Theater</h2>
          <ul>
            {/* Example items */}
            <li>Item A - 10</li>
            <li>Item B - 5</li>
            <li>Item C - 20</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OperationTheaterStaff;
