import React from 'react';
import './Terminal.css';

const CommandOutput = ({ command }) => {
  return (
    <div className="command-output">
      <p>
        <span className="prompt">$</span> {command.input}
      </p>
      {command.output && <p>{command.output}</p>}
      {command.component && <div className="component">{command.component}</div>}
    </div>
  );
};

export default CommandOutput;
