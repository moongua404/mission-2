import React from 'react';
import './TextButton.css';

type ComponentButtonProps = {
    placeholderText?: string;
    size?: "medium" | "large";
}

const sizeStyleMap = {
  medium: {
    height: '46px',
    fontSize: '14px',
    fontWeight: 500
  },
  large: {
    height: '56px',
    fontSize: '18px',
    padding: '14px 28px',
    fontWeight: 600
  },
};

const TextButton: React.FC<ComponentButtonProps> = ({ placeholderText, size = 'medium' }) => {
  const style = sizeStyleMap[size];

  return (
    <button className="login--button" style={style}>{ placeholderText }</button>
  );};
  
  export default TextButton;