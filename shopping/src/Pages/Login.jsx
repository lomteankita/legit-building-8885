import React from 'react'

const Login = () => {
  return (

    <div >
      <h1> Login Page </h1>
      <div style={{display:"flex", width:"90%",margin:"auto"}}>
        <div  style={{width:"40%",margin:"auto"}}> 
        <h1> Returning Customers</h1>
        <p>If you are a registered user, please enter your email and password.</p>
        <form >
      <input placeholder='name'style={{ width:"80%",margin:"auto",height:"25px"}}></input>
      <br />
      <br />
      <input placeholder='password' style={{ width:"80%",margin:"auto",height:"25px"}}></input>
      <br />
      <br />
      <input value="SUBMIT" type="submit" style={{ width:"80%",margin:"auto",height:"35px",color:"white",background:"darkblue"}}></input>
      </form>
        </div>
        <div style={{width:"40%",margin:"auto"}}>
          <div>
            <h1>New Customers</h1>
            <p>Creating an account is easy. Just fill out the form below and enjoy the benefits of being a registered customer.</p>
            <button style={{ width:"80%",margin:"auto",height:"35px",color:"white",background:"darkblue"}}>CREACT ACCOUNT KNOW </button>
          </div>
          <h1>
          Track Your Order
          </h1>
          <p>See your order even if you are not a registered user.</p>
        <form >
      <input placeholder='ORDER NUMBER 'style={{ width:"80%",margin:"auto",height:"25px"}}></input>
      <br />
      <br />
      <input placeholder='ORDER EMAIL' style={{ width:"80%",margin:"auto",height:"25px"}}></input>
      <br />
      <br />
      <input placeholder='BILLING ZIP CODE' style={{ width:"80%",margin:"auto",height:"25px"}}></input>
      <br />
      <br />
      <input value="CHECK STATUS" type="submit"style={{ width:"80%",margin:"auto",height:"35px",color:"white",background:"darkblue"}}></input>
      </form>
        </div>
      </div>
    
    </div>
  )
}

export default Login