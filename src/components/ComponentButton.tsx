import React from 'react';
import './ComponentButton.css';

type ComponentButtonProps = {
    type: 'password' | 'text' | 'number';
    placeholderText?: string;
    endAdornment?: React.ReactNode;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ComponentButton: React.FC<ComponentButtonProps> = ({ type, placeholderText, endAdornment, value, onChange }) => {
    return (
      <div className='login--button__wrapper'>
        <input
          type={type}
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
          onBlur={onChange}
          className="login--button__input"
        />
        {endAdornment && <div className='login--button__adornment'>{endAdornment}</div>}
      </div>
    );
  };
  
  export default ComponentButton;