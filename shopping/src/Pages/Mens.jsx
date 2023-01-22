import React from 'react'
import {useState,useEffect} from "react";


const Mens = () => {

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
      <h1>Mens Page</h1>
      <div style={{height:"500px"}}>
      <img style={{height:"100%"}} src="https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dwa1c67e3b/60732538_007_alt2.jpg?sw=478&sh=557&sm=fit&sfrm=jpg"  alt=''/>
      <img style={{height:"100%"}}  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw6b00462b/images/PLP_Banners/2022/122322/122322_DT_PLP_Clearance%402x-min.png"  alt=''/>
      </div>
      <br />
      <div style={{height:"500px",margin:"auto",display:"flex",
         width:"90%"}}>
      <img style={{height:"100%",margin:"auto"}} src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwc908e3b8/images/shorts-guide/2020/guys-shorts-guide/LONG%20CARGO.jpg"  alt=''/>
      <img style={{height:"100%",margin:"auto"}}  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw8287ef13/images/shorts-guide/2020/guys-shorts-guide/BEACH%20CHINO.jpg"  alt=''/>
      <img style={{height:"100%",margin:"auto"}} src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw54f0dee5/images/shorts-guide/2020/guys-shorts-guide/SLIM%20CUT-OFF.jpg" alt=''/>
      </div>
      <div>
        <h1 style={{color:"red"}}>50-70% Off Everything! & Our Biggest Shorts Event of The Season!</h1>
      </div>
      <br />
      <br />


      <div  style={{height:"500px",margin:"auto",display:"grid", gridTemplateColumns:" 1fr 1fr 1fr 1fr",
         width:"90%"}}>
       {/* Restaurant Card */}
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

export default Mens