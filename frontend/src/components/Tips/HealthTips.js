import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    axios.get('/api/health/tips')
      .then(res => setTips(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Daily Health Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthTips;