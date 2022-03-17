import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Details()  {
   // url param
   const { id } = useParams();
  // Crypto data variable
  const [cryptos, setCryptos] = useState([]);  
  //Getting Crypto data from api

  const fetchAPIData = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const jsonResponse = await response.json(); 
    setCryptos(jsonResponse.data.find((CryptoId) => CryptoId.id === id));
  }
  
  useEffect(() => {        
   

    fetchAPIData();
  }, []);


  return (
    <div>
        <h1>{cryptos.id}</h1>
        <p>{cryptos.rank}</p>
    </div>
  )
}
