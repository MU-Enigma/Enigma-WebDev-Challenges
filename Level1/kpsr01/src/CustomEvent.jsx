import React from 'react';
import './App.css';

const CustomEvent = ({ event }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(event.link, '_blank');
  };

  return (
    <a href={event.link} className="custom-event" onClick={handleClick}>
      <span className="custom-event-title">{event.title}</span>
    </a>
  );
};

export default CustomEvent;
