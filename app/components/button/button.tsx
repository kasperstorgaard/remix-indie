import styles from './button.css';
import React from 'react';

export const links = () => [
  { rel: "stylesheet", href: styles },
];

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'submit'|'reset'|'button',
  variation?: 'primary'|'secondary'|'error'|'warn',
  inverted?: boolean,
} 

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    const classNames = [
      'ri-button',
      props.variation && `-${props.variation}`,
      props.inverted && '-inverted'
    ].join(' ');

    return (
      <button {...props} ref={ref} className={classNames}>
        { children }
      </button>
    );
  }
);

Button.displayName = "Button";