import React from 'react'
import { TextInputProps } from '../Types/interfaces'

const TextInput: React.FC<TextInputProps> = ({
    label, name, value, onChange, onBlur, placeholder, type ='text', error}) => {

    return (

    <div style={{marginBottom: '16px'}}>
        <label htmlFor={name} style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}></label>
        <input
        id={name}
        name={name}
        type={type}
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
      {error && (
        <span style={{ color: 'red', fontSize: '14px', marginTop: '4px', display: 'block' }}>
          {error}
        </span>
      )}

    </div>
  )
}

export default TextInput