import React from 'react'
import {Link} from "react-router-dom";


const Navbar = () => {
const Links =[
    {path:"/" , title:"Home"},
    
    {path:"/mens" ,title:"Mens"},
    {path:"/women",title:"Womens"},
    { path:"/jeans" ,title:"Jeans"},
    { path:"/card", title:"Card"},
    { path:"/login",title:"Login"},
   
    
]

  return (

    <div style={{
        width:"80%",
        display:"flex",
        justifyContent:"space-arround",
        margin:"auto",
    }}>
        {Links.map((link)=>(
            <Link  style={{margin:"auto",color:"darkblue",fontSize:"25px"}} key={link.path} to={link.path}>
                {link.title}
            </Link>
        ))}
    </div>
  )
}

export default Navbar

        
      
         
        
         