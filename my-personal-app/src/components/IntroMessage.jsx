import React from 'react';


const IntroMessage = ({ typedIntro }) => {
  return (
    <div className="intro-message">
      <pre>{typedIntro}</pre>
    </div>
  );
};

export default IntroMessage;
