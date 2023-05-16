import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios.get('https://32uaaf6qzblpdghlye35xigglm0ouway.lambda-url.us-east-1.on.aws/').then(res => {
      setPersonajes(res.data.data.results);
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
              <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" style={{ width: "80%", height: "80%" }} />
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
