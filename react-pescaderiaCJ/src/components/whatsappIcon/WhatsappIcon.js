import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappIcon = () => {
  return (
    <div className="whatsapp-icon" style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: '1000',
      animation: 'whatsappAnimation 2s infinite alternate'
    }}>
      <a href="https://api.whatsapp.com/send?phone=3492317823" target="_blank" rel="noreferrer">
      <FaWhatsapp size={50} color="#25d366" />
      </a>
    </div>
  );
}

export default WhatsappIcon;
