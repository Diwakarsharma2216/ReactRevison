import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

// export const fetchData = async () => {
//   // make fetch request to the mentioned api and return the result here
  
//   return  fetch("https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1").then((res)=>res.json())
// };



// const fetchfunction=async()=>{
//   const data= await fetchData()
//   return data
// }

function FlightSearch() {
  // on page load fetch the data (useEffect)
const [data,setdata]=useState([])
const [source,setsource]=useState("")
const [desti,setdesti]=useState("")

const [flightdata,setflightdata]=useState([])


  useEffect(()=>{
   
    fetch("https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1").then((res)=>res.json()).then((data)=>{
      setdata(data)
    }).catch((err)=>{
      console.log(err)
    })
   

  },[])

  const handleSearch = () => {
    // filter the data based on source and destination
    let newdata=data.filter((el)=>el.source ===source && el.destination===desti)
    setflightdata(newdata)

  };
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" value={source} onChange={(e)=>setsource(e.target.value)} placeholder="Source" />
          <br /> <br />
          <input data-testid="destination-input" value={desti} onChange={(e)=>setdesti(e.target.value)} placeholder="Destination" />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch}>Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      <div data-testid="no-flights" className="">
            
            {!source && !desti ? "No Flights Found" :<SearchResults  flightdata={flightdata} />}
          </div>
    </div>
  );
}

export default FlightSearch;
