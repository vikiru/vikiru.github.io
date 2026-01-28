import { useState } from 'react';

export function useNav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    handleClick,
  };
}
