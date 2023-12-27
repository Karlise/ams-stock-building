import React, { useState } from 'react';
import Popup from './components/Popup';

const App: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopup} className='btnToggle'>Add New Stock</button>
      {isPopupOpen && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default App;
