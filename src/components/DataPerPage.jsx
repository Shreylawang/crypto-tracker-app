import React from "react";
import "../DataPerPage.css";
import { Link } from "react-router-dom";
import Details from "./Details";

export default function Pagination({ crypto, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const numberFormat = (num) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD",
    }).format(num);

    const cryptoFormat = (num) =>
    new Intl.NumberFormat("en-IN", {      
    }).format(num);
    
    
  return (
    <div className="dataContainer">
      <table class="styled-table">
        <tr id="table-row">
          <th>#^</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h %</th>
          <th>Market Cap</th>
          <th>Volume(24h)</th>
          <th>Circulating Supply</th>
          <th>MaxSupply</th>
          <th>Vwap24Hr</th>
          <th>Details</th>

        </tr>
      
        {crypto.map((currCrypto) => {
          return (
            <tr key={currCrypto.id}>

              <td data-label="#^">{currCrypto.rank}</td>
              <td data-label="Name">
                {currCrypto.name}({currCrypto.symbol})
              </td>
              <td data-label="Price">{numberFormat(currCrypto.priceUsd)}</td>
              <td data-label="24h %">{(parseFloat(currCrypto.changePercent24Hr).toFixed(2))}%</td>
              <td data-label="Market Cap">{numberFormat(currCrypto.marketCapUsd)}</td>
              <td data-label="Volume(24h)">{numberFormat(currCrypto.volumeUsd24Hr)}</td>
              <td data-label="Circulating Supply">{cryptoFormat(parseInt(currCrypto.supply))} {currCrypto.symbol} </td>
              <td data-label="MaxSupply">{currCrypto.maxSupply ? (cryptoFormat(parseInt(currCrypto.maxSupply))) : "NA" }</td>              
              <td data-label="Vwap24Hr">{currCrypto.vwap24Hr}</td>
              <td data-label="Details">
                <Link to={`details/${currCrypto.id}`}>                             
                  View Details
                </Link>
              </td>
              
            </tr>
          );
        })}
      </table>
    </div>
  );
}
