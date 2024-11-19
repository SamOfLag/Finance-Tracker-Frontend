import React, { useState } from 'react';
import TextInput from '../Components/TextInput';
import { TextInputProps } from '../Types/interfaces';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
  }>({
    username: undefined,
    email: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Sign Up</h1>
      <form>
        <TextInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          error={errors.username}
        />
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          type="email"
          error={errors.email}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
