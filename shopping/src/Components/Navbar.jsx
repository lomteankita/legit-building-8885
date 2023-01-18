import React from 'react'
import {Link} from "react-router-dom";


const Navbar = () => {
const Links =[
    {path:"/" , title:"Home"},
    { path:"/card", title:"Card"},
    {path:"/mens" ,title:"Mens"},
    {path:"/women",title:"Womens"},
    { path:"/login",title:"Login"},
    { path:"/jeans" ,title:"Jeans"}
    
]

  return (

    <div style={{
        width:"80%",
        display:"flex",
        justifyContent:"space-arround",
        margin:"auto",
    }}>
        {Links.map((link)=>(
            <Link  style={{margin:"auto"}  } key={link.path} to={link.path}>
                {link.title}
            </Link>
        ))}
    </div>
  )
}

export default Navbar

        
      
         
        
         