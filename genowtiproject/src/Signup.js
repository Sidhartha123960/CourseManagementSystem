import axios from 'axios';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";


export const Signup = (props) =>
{

    const browsertitle = "Signup";


    const sd = 
    {
        backgroundImage:"url('LOGLOCK.jpg')",
        position:"fixed", 
        width:"100%", 
        height:"340px"
    }
    
    const ddd = 
    {
    
        width:"23rem", 
        height:"458px", 
        marginTop:"7%"   
    }

    const navigate = useNavigate(); 
    
    const data = {email:"", encrypted_password:"", confirm_encrypted_password:""};
    const [signupuser , setSignupUser]=useState(data);

    const handleData = (e) =>
    {
      setSignupUser({...signupuser, [e.target.name]:e.target.value})
    } 
      
   const HandleResponse = (e) => 
   {
      if(signupuser.email!==''  && signupuser.encrypted_password!=='' && signupuser.confirm_encrypted_password!=='')
       {
          if(signupuser.encrypted_password.length <=10  &&  signupuser.confirm_encrypted_password.length <= 10  &&  signupuser.encrypted_password == signupuser.confirm_encrypted_password)
          {    

            axios.post("http://localhost:8775/signup/successfully",signupuser).then((response)=>{
             console.log(response);
        }).catch(error => console.error('Error:',error));
              
          alert("Signup successfully..\nplease login");  
            
            setTimeout(()=>{
                const data ={
                    email:signupuser.email,
                    encrypted_password:signupuser.encrypted_password
                }
                           
               navigate("/login", {state: {userData:data}})

             },2000)
         }
         else
         {
                alert("please enter vaild password");
         }

       }
      else 
       {
             alert("it shouldn't be blank"); 
       }
              e.preventDefault();
    }
    
   return (    
    <>
    <Helmet>
    <title>{browsertitle}</title>
    </Helmet>
    <div style={sd}>
    <center>
    <Card style={ddd}>
    <Card.Header style={{
           
           fontSize:"26px", 
           backgroundColor:"#538eed", 
           color:"white", 
           display: "grid", 
           gridAutoFlow: "column",
           gridColumnGap: "56%",
           paddingRight:"43%"
           
    }}><Link to="/login"><FaArrowLeft style={{ fontSize:"20px" , color:"white" }}/></Link> Signup </Card.Header> 
    <Card.Body>
   <form>
   <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">Email address</label>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="email"  value={signupuser.email}  onChange={handleData}  placeholder='Email address'  required/>
   <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
   </div>
   <br></br>
   <div class="mb-3">
   <label for="exampleInputPassword1" class="form-label">Password</label>
   <input type="password" class="form-control" id="exampleInputPassword1"  placeholder="Password"  name="encrypted_password"  value={signupuser.encrypted_password} onChange={handleData}   required/>
   </div>
   <br></br>
   <div class="mb-3">
   <label for="exampleInputPassword1" class="form-label">confirm Password</label>
   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name="confirm_encrypted_password"  value={signupuser.confirm_encrypted_password} onChange={handleData}  required/>
   </div>  
   <button type="submit" class="btn btn-primary"  id="signupbuttonstyle"        
         style={{
               width:"190px"
         }}
     onClick={HandleResponse}>Signup</button> 
   </form>    
    </Card.Body> 
    </Card>
    </center>
    </div>
    </>    
    ); 
}