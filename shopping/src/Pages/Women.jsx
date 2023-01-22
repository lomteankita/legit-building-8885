import React from 'react'
import {useState,useEffect} from "react";


const Women = () => {

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
      <h1>Womens Page</h1>
      <div style={{height:"500px"}}>
      <img style={{height:"100%"}} src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwde01a0ae/images/Jeans-LP/2022/122322/Flare-image-DT%402x-min.png"  alt=''/>
      <img style={{height:"100%"}}  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw6b00462b/images/PLP_Banners/2022/122322/122322_DT_PLP_Clearance%402x-min.png"  alt=''/>
      </div>
      <br />
      <div style={{height:"500px",margin:"auto",display:"flex",
         width:"90%"}}>
      <img style={{height:"100%",margin:"auto"}} src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd31e0e5c/images/jeans-guide/031320-girls-shorts-guide/CURVY.jpg"  alt='' />
      <img style={{height:"100%",margin:"auto"}}  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw1d7d9d9a/images/jeans-guide/031320-girls-shorts-guide/VINTAGE%20HIGH%20RISE.jpg"  alt=''/>
      <img style={{height:"100%",margin:"auto"}} src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwe4c9367c/images/jeans-guide/031320-girls-shorts-guide/MOM.jpg" alt=''/>
      </div>
      <div>
        <h1 style={{color:"red"}}>50-70% Off Everything! & Our Biggest Shorts Event of The Season!</h1>
      </div>
      <br />
      <br />


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

export default Women