import React from 'react';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const RevealText: React.FC<RevealTextProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <span 
      className={`inline-block animate-slide-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </span>
  );
};

export default RevealText;