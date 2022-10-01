import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'


export const Button = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={clsx(
            className,
            'text-white max-h-[44px]'
        )}>
            {children}
        </button>
    )
}