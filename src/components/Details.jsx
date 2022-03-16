import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Details() {

  // Crypto data variable
  const [cryptos, setCryptos] = useState([]);

  //Getting Crypto data from api
  const getUsers = async () => {         
    const response = await fetch('https://api.coincap.io/v2/assets');
    const jsonResponse = await response.json();      
    setCryptos(jsonResponse.data); 
  };  
  useEffect(() => {        
    getUsers();
  }, []);

  console.log(cryptos)  
  // url param
  const { id } = useParams();
  // console.log(id)

 
  function getCrypto(CryptoId) {
    console.log(CryptoId)    
    return cryptos.find(({id}) => CryptoId === id); 
  }
  const cryptoData = getCrypto(id);
//  console.log(cryptoData)
  return (
    <div>
        <h1>{cryptoData}</h1>
    </div>
  )
}
