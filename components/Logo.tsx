import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10" }) => {
  return (
    <img
      src="/logo.png"
      alt="Crafted Music House Logo"
      className={`${className} object-contain`}
      loading="eager"
    />
  );
};

export default Logo;