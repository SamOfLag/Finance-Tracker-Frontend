import React, { useState } from 'react';
import { PasswordInputProps } from '../Types/interfaces';
import { FaEyeSlash, FaEye} from 'react-icons/fa'

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ marginBottom: '16px', position: 'relative' }}>
      <label htmlFor={name} style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: error ? '1px solid red' : '1px solid #ccc',
        }}
      />
      <span
        onClick={toggleVisibility}
        style={{
          position: 'absolute',
          right: '10px',
          top: '36px',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#666',
        }}
      >
        {isVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
      {error && (
        <span style={{ color: 'red', fontSize: '14px', marginTop: '4px', display: 'block' }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
