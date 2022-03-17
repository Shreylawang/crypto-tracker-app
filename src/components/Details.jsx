import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Details()  {
   // url param
   const { id } = useParams();
  // Crypto data variable
  const [cryptos, setCryptos] = useState([]);
  let User = '';
  //Getting Crypto data from api
  const getUsers = async () => {         
    const response = await fetch('https://api.coincap.io/v2/assets');
    const jsonResponse = await response.json();      
    setCryptos(jsonResponse.data); 
  };  
  
  useEffect(() => {        
    getUsers();
  }, []);
  
function getCrypto(CryptoId) {
    console.log(CryptoId)    
    return cryptos.find((CryptoId) => CryptoId.id === id); 
  }
const matchUser = () => {
    const temp = getCrypto(id);
  const cryptoData = {temp}
  console.log(cryptoData.temp); 
  User = cryptoData.temp;  
}

matchUser()
  console.log(User)
  return (
    <div>
        <h1>{JSON.stringify(User)}</h1>
    </div>
  )
}
