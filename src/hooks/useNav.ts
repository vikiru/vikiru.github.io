import { useCallback, useEffect, useRef, useState } from 'react';

export function useNav() {
  const [isOpen, setIsOpen] = useState(false);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const openDrawer = useCallback(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;
    setIsOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    previousActiveElement.current?.focus();
  }, []);

  const handleClick = useCallback(() => {
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }, [isOpen, openDrawer, closeDrawer]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeDrawer();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeDrawer]);

  return {
    isOpen,
    handleClick,
    openDrawer,
    closeDrawer,
  };
}
