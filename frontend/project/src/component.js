import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);

  function populateData(data) {
    axios.post('http://localhost:8000/api/mymodels/', data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/mymodels/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Data:</h1>
      <button onClick={() => populateData({ name: 'New Item' })}>Add Item</button>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
