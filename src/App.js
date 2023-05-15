import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


// https://gateway.marvel.com:443/v1/public/characters?apikey=6e578bd8669d3b4d78b0db5e5b44e1f6

// Key privada: 28e175412cf48fc08442b9540feefa63f86da148
// Key Publica: 6e578bd8669d3b4d78b0db5e5b44e1f6
// ts: 1 

// hashmd5(1llaveprivadallavepublica)
// 128e175412cf48fc08442b9540feefa63f86da1486e578bd8669d3b4d78b0db5e5b44e1f6
// hash: ebb925d085a862020285610c16aa3364


function App() {
  const [personajes, setPersonajes] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('/.netlify/functions/lambda');
      const data = await response.json();
      setPersonajes(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>PERSONAJES</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {personajes.map((per) => (
          <div className="col" key={per.id}>
            <div className="card" style={{ width: '18rem', height: '18rem' }}>
              <img
                src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                alt={per.name}
                className="card-img-top"
                style={{ width: '80%', height: '80%' }}
              />
              <div className="card-body">
                <p className="card-text">{per.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
