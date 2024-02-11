import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Sign.css"
import { useSnackbar } from "notistack";
function Sign() {
const[username,setUsername] = useState("");
const[password,setPassword] = useState("");
const navigate = useNavigate();
const { enqueueSnackbar } = useSnackbar();


const handleClick = () => {
  
  navigate('/Loged');
};

async function submit(event) {
  event.preventDefault();

  // Define the data to be sent
  const data = {
      username,
      password,
  };

  try {
      // Send a POST request using Axios
      const response = await axios.post('http://localhost:5000/login/sign', data);
      enqueueSnackbar("USER SIGNUP SUCCESSFULLY", { variant: "success", autoHideDuration: 1000 });
      // Log the response data
      console.log(response.data);
      // navigate("/Loged");

  } catch (error) {
      // Handle any errors
      enqueueSnackbar("USER SIGNUP FAILED", { variant: "error", autoHideDuration: 1000 });
      console.error('Error:', error.message);
  }
}


  return (
    <div className='container'>
      
        <form onSubmit={submit} className='insidecontain'>  
       <center> <label className='title'>SIGN UP </label><br></br><br></br></center>
        <label htmlFor="username" className='det'>Username:</label>
        <input 
          type="text"
          id="username"
          name="username"
          placeholder='enter name'
          onChange={function(){
            setUsername(event.target.value);
          }}
          style={{
            border: "1px solid black", // Set border to black
            borderRadius: "4px", // Add border radius for rounded corners
            padding: "8px", // Add padding for spacing
            marginBottom: "16px", // Add margin at the bottom for spacing
            
          }}
        /><br></br>

        <label htmlFor="password" className='det'>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='enter password'
          onChange={function(){
            setPassword(event.target.value);
          }}
          style={{
            border: "1px solid black", // Set border to black
            borderRadius: "4px", // Add border radius for rounded corners
            padding: "8px", // Add padding for spacing
            marginBottom: "16px" // Add margin at the bottom for spacing
          }}
        />
        

        <button type="submit" className='signupbtn'>submit</button><br></br>
        
        <button type="button" className='logibtn' onClick={handleClick}>Click Here for Already Register Login</button>
      </form>  
    </div>
  )
}

export default Sign