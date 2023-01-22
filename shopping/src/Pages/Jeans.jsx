import React from 'react'
import {useState,useEffect} from "react";

const Jeans = () => {
  const[adata ,setData]=useState([]);

  let getdata=async()=>{
    return fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=20`)
    .then((res)=> res.json())
   }
   let fetchdata=async()=>{
    
    let data=await getdata();
    
    setData(data.data)
    console.log(data.data)
   
   }
   useEffect(()=>{
    fetchdata();
   },[]);



  return (
    <div>

<h1 >Jeans List</h1>
<div  style={{height:"500px",margin:"auto",display:"grid", gridTemplateColumns:" 1fr 1fr 1fr 1fr",
         width:"90%"}}>
      
       { adata.map((e)=>(
        <div >
          <img src={e.image} />
          <h1> {e.name}</h1>
         <h2> RS : {e.price_starts_from}</h2>
         
         <button> ADD TO CARD</button>
         <br />
         <br />
         <br />
          </div >
         
       ))}
      </div>





    </div>
  )
}

export default Jeans