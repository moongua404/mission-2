import React from 'react';
import naverIcon from '../assets/icon/naver.png';
import './NaverIcon.css';

const NaverIcon: React.FC = () => {
    return (
      <div className='login__header'>
        <img src={naverIcon} alt="Naver Icon"/>
      </div>
    );
  };
  
  export default NaverIcon;