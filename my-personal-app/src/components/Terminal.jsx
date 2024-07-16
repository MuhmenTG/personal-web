import React, { useState, useRef, useEffect } from 'react';
import DOMPurify from 'dompurify';
import './Terminal.css';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import TechStack from './TechStack';
import LetterOfRecommandation from './LetterOfRecommandation';
import CommandOutput from './CommandOutput';
import IntroMessage from './IntroMessage';
import CommandForm from './CommandForm';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState([]);
  const [typedIntro, setTypedIntro] = useState('');
  const [introIndex, setIntroIndex] = useState(0);
  const terminalScreenRef = useRef(null);
  const introMessage = "Muhmen Parvaze - Software udvikler og passioneret flyenthusiast\nJeg er backend software udvikler med bopæl på Nørrebro i København.\nIstedet for at sende det sædvanlige ansøgning og cv i PDF, har jeg kodet det som CLI terminal med diverse kommandoer, I kan se under.\nGod fornøjelse, og jeg håber min ansøgning har vakt interesse.!";

  useEffect(() => {
    if (terminalScreenRef.current) {
      terminalScreenRef.current.scrollTop = terminalScreenRef.current.scrollHeight;
    }
  }, [commands]);

  useEffect(() => {
    if (introIndex < introMessage.length) {
      const timeout = setTimeout(() => {
        setTypedIntro((prev) => prev + introMessage[introIndex]);
        setIntroIndex((prev) => prev + 1);
      }, 40);

      return () => clearTimeout(timeout);
    }
  }, [introIndex, introMessage]);

  const handleInputChange = (e) => {
    const sanitizedInput = DOMPurify.sanitize(e.target.value);
    setInput(sanitizedInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    processCommand(input);

    setInput('');
  };

  const processCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();
    let newCommand = { input: trimmedCommand };

    switch (trimmedCommand) {
      case 'lookup about':
        newCommand.component = <About />;
        break;
      case 'lookup experience':
        newCommand.component = <Experience />;
        break;
      case 'lookup recommandation':
        newCommand.component = <LetterOfRecommandation />;
        break;
      case 'lookup contact':
        newCommand.component = <Contact />;
        break;
      case 'lookup tech stack':
        newCommand.component = <TechStack />;
        break;
      case 'clear':
        setCommands([]);
        return;
      default:
        newCommand.output = 'The command is not recognized as an internal or external command, operable program or batch file.';
    }

    setCommands([...commands, newCommand]);
  };

  return (
    <div className="terminal">
      <IntroMessage typedIntro={typedIntro} />
      <div className="terminal-screen" ref={terminalScreenRef}>
        {commands.map((cmd, index) => (
          <CommandOutput key={index} command={cmd} />
        ))}
      </div>
      <div className="initial-options">
        <ul>
          <li><code>lookup about</code> - Personlig & faglig profil </li>
          <li><code>lookup experience</code> - Uddannelse & Erhverserfaring</li>
          <li><code>lookup recommandation</code> - Anbefaling</li>
          <li><code>lookup tech stack</code> - Teknologer & sprog</li>
          <li><code>lookup contact</code> - Kontakt oplysninger</li>
        </ul>
      </div>
      <CommandForm input={input} onChange={handleInputChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default Terminal;
