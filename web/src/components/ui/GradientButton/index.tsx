import React from 'react';

interface GradientButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const GradientButton: React.FC<GradientButtonProps> = ({
    children,
    onClick,
    className = '',
    type = 'button',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
        px-5 py-3 rounded-full text-white text-base cursor-pointer font-semibold 
        bg-gradient-to-r from-primary via-secondary to-primary 
        bg-[length:200%_100%] bg-left hover:bg-right 
        transition-all duration-500 ease-in-out
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export default GradientButton;
