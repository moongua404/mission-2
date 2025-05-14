import React from 'react';
import './Label.css';

type LabelProps = {
    text: String;
}

const Label: React.FC<LabelProps> = ({ text }) => {
    return (
        <div className='login__label'>
            <label>{text}</label>
        </div>
    );
  };
  
  export default Label;