import React, { useEffect, useRef, useState } from 'react';
import './Dropdown.css';
import { ReactComponent as LowerArrow } from '../assets/icon/angle-small-down.svg';

type DropdownProps = {
  options: string[];
  placeholder?: string;
  onSelect?: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="login--dropdown" ref={dropdownRef}>
      <div className="login--dropdown--toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="selected-text">{selected || placeholder}</span>
        <span className="login--dropbox--toggle--arrow">{isOpen ? <LowerArrow/> : <LowerArrow/>}</span>
      </div>
      {isOpen && (
        <ul className="login--dropdown--menu">
          {options.map((opt) => (
            <li key={opt} onClick={() => handleSelect(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
