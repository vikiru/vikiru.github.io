import { useState } from 'react';

function useNav() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return {
        isOpen,
        handleClick,
    };
}

export default useNav;
