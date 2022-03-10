import React, {useState} from 'react';
import '../SearchBar.css';

export default function SearchBar({placeholder, data }) {
  
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) =>{
     const searchWord = e.target.value;
     setWordEntered(searchWord);
     const newFilter = data.filter((value)=>{
         if(value.name.toLowerCase().includes(searchWord.toLowerCase()))
         {
            return (value.name.toLowerCase()).includes(searchWord.toLowerCase());
         }
         else{
            return (value.symbol.toLowerCase()).includes(searchWord.toLowerCase());
         }         
     });
     if(searchWord === ""){
        setFilteredData([]);
     }else{
        setFilteredData(newFilter);
     }
    
  }
  const clearInput = (e) =>{
    setFilteredData([]);
    setWordEntered("");
  }
  return (
    <div className='search'>
        <div className="searchInput">
            <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
            <div className="searchIcon">
                { (filteredData.length === 0 ? <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/> : <img  id='clearBtn' onClick={clearInput} src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png"/>)}
                
            </div>
        </div>
        {filteredData.length !=0 &&
            (<div className="dataResult">
                {filteredData.map((value, key)=>{
                    return (
                        <a className='dataItem' href={value.explorer} target="_blank">
                            <p>{value.name}</p>
                        </a>
                    )
                })} 
            </div>)
        }        
    </div>
  )
}
