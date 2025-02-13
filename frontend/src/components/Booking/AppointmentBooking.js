import React, { useState } from 'react';
const AppointmentBooking = () => {
  const [appointment, setAppointment] = useState({ date: '', time: '', doctor: '' });
  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(appointment);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='date' name='date' onChange={handleChange} required />
      <input type='time' name='time' onChange={handleChange} required />
      <input type='text' name='doctor' placeholder='Doctor Name' onChange={handleChange} required />
      <button type='submit'>Book Appointment</button>
    </form>
  );
};
export default AppointmentBooking;