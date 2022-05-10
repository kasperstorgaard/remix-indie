import styles from './button.css';
import React from 'react';

export const links = () => [
  { rel: "stylesheet", href: styles },
];

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'submit'|'reset'|'button'
} 

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button {...props} ref={ref} className="ri-button">
        { children }
      </button>
    );
  }
);

Button.displayName = "Button";