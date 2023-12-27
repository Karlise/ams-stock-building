import React, { useState, useEffect } from 'react';
import './Popup.css';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [stockName, setStockName] = useState('');
  const [stockLocation, setStockLocation] = useState('');

  const handleStockNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockName(e.target.value);
  };

  const handleStockLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockLocation(e.target.value);
  };

  const handleCreate = () => {
    // Handle your create logic here
    console.log('Creating stock:', stockName, 'at location:', stockLocation);

    // Close the popup
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the popup if the overlay is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close the popup when the Escape key is pressed
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listeners when the component mounts
    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="popup-container" onClick={handleOverlayClick}>
      <div className="popup">
        <div className="popup-header">
          <button className="back-button" onClick={onClose}>
            &#8592; Back
          </button>
          <h4>Create new stock location</h4>
        </div>
        <hr className='hr'></hr>
        <div className="popup-body">
          <label>
            Stock name:
            <input type="text" value={stockName} onChange={handleStockNameChange} />
          </label>
          <label>
            Stock location:
            <input type="text" value={stockLocation} onChange={handleStockLocationChange} />
          </label>
          <button className="create-button" onClick={handleCreate}>
            Create - <span className='create-button-stock-name'>{stockName}</span> - Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
