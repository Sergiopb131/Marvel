import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState } from 'react';


// https://gateway.marvel.com:443/v1/public/characters?apikey=6e578bd8669d3b4d78b0db5e5b44e1f6

// Key privada: 28e175412cf48fc08442b9540feefa63f86da148
// Key Publica: 6e578bd8669d3b4d78b0db5e5b44e1f6
// ts: 1 

// hashmd5(1llaveprivadallavepublica)
// 128e175412cf48fc08442b9540feefa63f86da1486e578bd8669d3b4d78b0db5e5b44e1f6
// hash: ebb925d085a862020285610c16aa3364

function App() {

  const [personajes, setPersonajes]=useState([])

  useEffect(()=>{
 
      axios.get('https://tfpy3nrjyi7v6unlmrh6esqd4m0lljaa.lambda-url.us-east-1.on.aws/').then(res => {
      setPersonajes(res.data);

    }).catch(error=>console.log(error))
  },[])

  console.log(personajes)


  return (
    <div className="App">
          <h1>PERSONAJES</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">

            { personajes.map( per=>(
                 <div className="col" key={per.id}>
                 <div className="card" style={{width: "18rem", height:"18rem"}}>
                     <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" style={{width: "80%", height:"80%"}} />
                     <div className="card-body">
                       <p className="card-text">{per.name}</p>
                     </div>
                 </div>
             </div>
            ))
            } 
          </div>
    </div>
  );
}

export default App;
