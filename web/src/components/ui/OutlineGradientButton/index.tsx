import React from 'react';

interface GradientOutlineButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const GradientOutlineButton: React.FC<GradientOutlineButtonProps> = ({
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
            px-1 py-1 rounded-full text-white text-base cursor-pointer font-semibold 
            bg-gradient-to-r from-primary via-secondary to-primary 
            bg-[length:200%_100%] bg-left hover:bg-right 
            transition-all duration-500 ease-in-out
            ${className}
            `}
        >
            {/* {children} */}
            <span
                className="
                    relative block bg-white text-primary rounded-full px-4 py-1
                    transition-all duration-500 ease-in-out 
                    group-hover:bg-transparent
                "
            >
                {children}
            </span>
        </button>
    );
};

export default GradientOutlineButton;
