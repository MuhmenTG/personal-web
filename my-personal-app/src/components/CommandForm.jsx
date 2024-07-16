import React from 'react';
import './Terminal.css';

const CommandForm = ({ input, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="terminal-input-form">
      <span className="prompt">$</span>
      <input
        type="text"
        value={input}
        onChange={onChange}
        className="terminal-input"
        autoFocus
      />
    </form>
  );
};

export default CommandForm;
