import { faFaceTired } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from 'react';
import "./Notf.css";

export class Notfound extends Component
{
    render()
    {
        let notfound = 404;
        let notfoundtext = "Sorry, Page Not Found";
     return (   
         <center>
         <FontAwesomeIcon icon={faFaceTired} style={{
                       
                      marginTop:"50px",
                      fontSize:"200px", 
                      color:"#343536" 
         }}  />
         <h1 style={{ marginTop:"-25px", fontSize:"120px" ,  color:"#e6e5e3" }}>{notfound}</h1>
         <h3 style={{ color:"#c9c9c7" , fontSize:"30px" }}>{notfoundtext}</h3>
         <div id="circle"></div>
         </center>
      );     
   }   
}