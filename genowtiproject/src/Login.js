import axios from 'axios';
import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";


export const Login = () =>
{
  const logincardstyle = {

    marginTop:"100px",
    marginLeft:"1px", 
    position:"fixed", 
  }
const title = 'Login';
const location = useLocation(); 

const dataFromSingup = location?.state?.userData || {}

const navigate = useNavigate();


const signupstyle = {
  
      marginLeft:"21%", 
 } 

    const data = {email:"" , encrypted_password:""}; 
    const [userData, setUserData] = useState(data);   
  

    const handleData = (e) =>
    {
      setUserData({...userData , [e.target.name]:e.target.value})
    } 
    
    const handlebutton = (e) =>
    {  
        if((userData.email!='' &&  userData.encrypted_password!=''  ||  dataFromSingup?.email == userData.email  &&  dataFromSingup?.encrypted_password == userData.encrypted_password))    
        {
           if(userData.encrypted_password.length <= 10)
           {

        axios.post("http://localhost:8675/login/successfully", userData).then((res)=>{
              console.log(res); 
                
        }).catch(error => console.error('Error:', error));
          
          alert("Login successfully......\nThank you!!!!!"); 
          const expiryTime = new Date().getTime() + (60 * 60 * 1000); // Setting expiry time to 1 hour from now
          const userDataWithExpiry = { ...userData, expiryTime }; //
          localStorage.setItem('myObject', JSON.stringify(userDataWithExpiry)); 
          navigate( "/courses");
 /*--------------------------------------------------------------------------------------------------------------------------*/ 
            
        }
         else
         {
             alert("please enter valid password");
         }
      }
       else
       {
            alert("It shouldn't be blank");
       }

                      e.preventDefault();
    }
 
    return (
        <>
        <Helmet>
          <title>{ title }</title>
        </Helmet>
        <Container style={logincardstyle}  fluid>
            <Row>   
                <Col md={6}>
                <Card>
                <Card.Header style={{
                       fontSize:"25px", 
                       backgroundColor:"#538eed", 
                       color:"white",  
                       paddingLeft:"40%"              
                }}>Login</Card.Header>  
                <Card.Body>
                <form>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'   name="email"  value={userData.email} onChange={handleData}  required/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'  name="encrypted_password"  value={userData.encrypted_password}  onChange={handleData}   required/>
  </div>
  <br></br>
  <br></br>
  <button type="submit" class="btn btn-primary" style={{
                       marginLeft:"31%", 
                       marginTop:"-10%", 
                       width:"140px" , 
  }}  id="Loginbuttonstyle"  onClick={handlebutton}>Login</button>
   
  <p style={signupstyle}>Do you have an account? if no then</p><Link to="/signup" style={{

  marginLeft: "38%",
  fontSize: "15px",
  textDecoration: "none",
   }}>Signup</Link>
</form>
                </Card.Body>
                </Card>               
                </Col>
                <Col>
                <img src='LOGLOCK.jpg'  
                 style={{
                    
                    height:"38rem",
                    width:"104.8%", 
                    display:"flex", 
                    justifyContent:"start",
                    marginTop:"-100px", 
                    marginLeft:"-9px" 
                 }}
                 />
                </Col>
            </Row> 
        </Container>
      </> 
  );}      