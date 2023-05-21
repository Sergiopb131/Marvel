import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios.get('https://y3fuq7lqf4dxwdsz3cxqw3arla0vbqyl.lambda-url.us-east-1.on.aws/').then(res => {
      setPersonajes(res.data.body);
    }).catch(error => console.log(error));
  }, []);

  console.log(personajes);

  return (
    <div className="App">
      <h1>PERSONAJES</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {personajes.map(per => (
          <div className="col" key={per.id}>
            <div className="card" style={{ width: "18rem", height: "18rem" }}>
              <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" style={{ width: "80%", height: "80%" }} alt={per.name} />
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
