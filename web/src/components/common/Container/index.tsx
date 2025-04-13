import React from 'react'

interface ContainerProps {
    children: React.ReactNode
    className?: string
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
    disableGutters?: boolean
}

const Container: React.FC<ContainerProps> = ({
    children,
    className = '',
    maxWidth = '2xl',
    disableGutters = false,
}) => {
    const maxWidthClass = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-7xl',
        full: 'max-w-full',
    }[maxWidth || '2xl']

    const gutterClass = disableGutters ? '' : 'px-4 md:px-6 lg:px-8'

    return (
        <div className={`w-full mx-auto ${maxWidthClass} ${gutterClass} ${className}`}>
            {children}
        </div>
    )
}

export default Container
