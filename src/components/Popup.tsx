import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    if(stockName.trim() == "")
    {
      toast.warning("Enter stock name please!")
      return;
    }
    if(stockLocation.trim() == "")
    {
      toast.warning("Enter stock location please!")
      return;
    }
    toast.success(`Stock "${stockName}" created successfully!`);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
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
        <hr className="hr"></hr>
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
            Create - <span className="create-button-stock-name">{stockName ? stockName : "New"}</span> - Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;