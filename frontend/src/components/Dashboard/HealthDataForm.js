import React, { useState } from 'react';
const HealthDataForm = () => {
  const [data, setData] = useState({ weight: '', height: '', age: '', medicalHistory: '' });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='weight' placeholder='Weight' onChange={handleChange} required />
      <input type='text' name='height' placeholder='Height' onChange={handleChange} required />
      <input type='text' name='age' placeholder='Age' onChange={handleChange} required />
      <input type='text' name='medicalHistory' placeholder='Medical History' onChange={handleChange} required />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default HealthDataForm;