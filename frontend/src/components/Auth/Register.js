import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;