
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useSnackbar } from "notistack";
import "./Sign.css"
import axios from 'axios';


function Loged() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate hook
    const { enqueueSnackbar } = useSnackbar();

    async function submit(event) {
        event.preventDefault();
      
        // Define the data to be sent
        const data = {
            username,
            password,
        };
      
        try {
            // Send a POST request using Axios
            const response = await axios.post('http://localhost:5000/login/auth', data);
            
            // Log the response data
            console.log(response.data);
            if(response.data.message=='SuccessFully Login'){
                enqueueSnackbar("USER LOGIN SUCCESSFULLY", { variant: "success", autoHideDuration: 1000 });
               
                navigate('/Home ');
            }
            else{
                enqueueSnackbar("USER LOGIN FAILED", { variant: "error" });
            }
            // 
      
        } catch (error) {
            // Handle any errors
            
            console.error('Error:', error.message);
        }
      }

    return (
        <div style={{
            // maxWidth: '400px',
            // margin: '350px auto 0',
            // padding: '20px',
            // borderRadius: '8px',
            // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            // backgroundColor: '#ffffff'
        }} className='logdiv'>
            <form onSubmit={submit}> {/* Move onSubmit to form element */}
                <center><label className='title'>Login </label><br></br><br></br></center>
                <label htmlFor="username" className='det'>Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                    style={{
                        border: "1px solid black",
                        borderRadius: "4px",
                        padding: "8px",
                        marginBottom: "16px"
                    }}
                /><br></br>

                <label htmlFor="password" className='det'>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    style={{
                        border: "1px solid black",
                        borderRadius: "4px",
                        padding: "8px",
                        marginBottom: "16px"
                    }}
                />

                <button type="submit" className='login'>LOGIN</button><br></br>
            </form>
        </div>
    )
}

export default Loged;
