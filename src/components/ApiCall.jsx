import React, { useState } from 'react';
import '../ApiCall.css'
import { useEffect } from 'react';
import DataPerPage from "./DataPerPage.jsx";
import Pagination from './Pagination.jsx';
import SearchBar from './SearchBar.jsx';
import ScrollButton from './ScrollTop';

const UseEffectAPI = () => {

    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(20);

    const getUsers = async () => {   
      setLoading(true)     
      const response = await fetch('https://api.coincap.io/v2/assets');
      const jsonResponse = await response.json();      
      setCryptos(jsonResponse.data);
      setLoading(false)   
    };
    
    useEffect(() => {        
      getUsers();
    }, []);
    
    // Get current Posts
    const indexOfLastCrypto = currentPage * dataPerPage;
    const indexOfFirstCrypto = indexOfLastCrypto - dataPerPage;
    const currentCryptos = cryptos.slice(indexOfFirstCrypto, indexOfLastCrypto)
    
    // Change Page
    const paginate  = (pageNumber) => setcurrentPage(pageNumber)

  return (
    <>
      
    
      <div className="container">
        <div className="row">            
            <SearchBar placeholder="Enter CryptoCurrency....." data={cryptos} />
            <DataPerPage crypto={currentCryptos} loading={loading} />           
            <Pagination currentPage={currentPage} dataPerPage={dataPerPage} totalData={cryptos.length} paginate={paginate}  /> 
            <ScrollButton />  
        </div>
      </div>
    </>
  );
}
export default UseEffectAPI;