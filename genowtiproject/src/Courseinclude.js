import { faCalendar, faCertificate, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const Courseinclude = () => 
{
  const cardstyle = {
    height: '99vh',
    width: '100%'
  
  }
  const cardheader = {

    width:"99.7%", 
    paddingLeft:"14%", 
    position:"absolute", 
    left:"1px", 
    backgroundColor:"white", 
    fontWeight:"bold" , 
    fontSize:"24px" 
  }

  const faicon1 = {
     
    position:"absolute", 
    left:"-3rem"        

  }

  const cardtext = {
     
     position:"absolute", 
     top:"15%", 
     left:"25%"
  }
  
  const ctst1 = {

    fontSize:"20px",      
    position:"absolute", 
    left:"-3rem", 
    top:"3rem" 

  }

  const ctst2 = {

    fontSize:"20px",      
    position:"absolute", 
    left:"-3rem", 
    top:"6rem" 

  }

  const ctst3 = {

    fontSize:"20px",      
    position:"absolute", 
    left:"-2.5rem", 
    top:"9rem"
  } 
  const ctst4 = {

    fontSize:"20px",      
    position:"absolute", 
    left:"-2.5rem", 
    top:"12rem" 
  }
  const ctst5 = {

    fontSize:"20px",      
    position:"absolute", 
    left:"-3rem", 
    top:"15rem" 

  } 
 const ctst6 = {
 
  fontSize:"20px",      
  position:"absolute", 
  left:"-2.5rem", 
  top:"18rem"

 }
 const ctst7 = {

  fontSize:"20px",      
  position:"absolute", 
  left:"-2.5rem", 
  top:"21rem"

 }

const faicon2 = {
  
  position:"absolute", 
  left:"-2.5rem" 
}

const faicon3 = {

  position:"absolute", 
  left:"-2.5rem" 
}
  return (
        <> 
       <Card style={cardstyle}>
       <Card.Body>
          <Card.Header style={cardheader}>This Course Includes:</Card.Header>
        </Card.Body>
        <Card.Title style={cardtext}>
       <FontAwesomeIcon icon={faCalendar}  style={faicon1}/> 1 Year Access
         <br></br>
         <br></br>
       <h1 style={ctst1}>5.5</h1>Hours Of Video
         <br></br>
         <br></br>
       <h1 style={ctst2}>145</h1>Lectures
         <br></br>
         <br></br>
        <h1 style={ctst3}>9</h1>Follow Alongs 
         <br></br>
         <br></br>
       <h1 style={ctst4}>8</h1>Cheat Sheets 
         <br></br>
         <br></br>
        <h1 style={ctst5}>170</h1>Flashcards 
         <br></br>
         <br></br>
        <h1 style={ctst6}>1</h1>Cloud Account Validators 
         <br></br>
         <br></br>   
        <h1 style={ctst7}>3</h1>Practice Exams 
         <br></br>
         <br></br>
        <FontAwesomeIcon  icon={faListCheck} style={faicon2}/>Individual Video Quizlets 
        <br></br>
        <br></br>
        <FontAwesomeIcon  icon={faCertificate} style={faicon3}/>Certificate Of Completion  
        <br></br>
        <br></br>
        </Card.Title>
        </Card>
       </>
   );
}   
export default Courseinclude;