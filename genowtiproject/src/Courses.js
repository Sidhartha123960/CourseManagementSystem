import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./courses.css";


const Courses = () => 
{
     return (
        <>
        <center>
        <h1 id="cheading">Courses</h1>
        </center>  
     <Link to="/java_full_stack"  style={{ textDecoration:"none" }}><Card style={{ width: '25rem' , marginLeft:"250px" , marginTop:"35px" , cursor:"pointer" , borderBottom:"none" }} id="zoom1">
      <Card.Img variant="top" src="./java-fullstack-development.jpeg" />
      <Card.Body>
        <Card.Title>Java Full Stack Development</Card.Title>
        <Card.Text>
        From Beginner to Advanced Level.<br></br>
        Learn how to become a Java full-stack developer.
        </Card.Text>
      </Card.Body>
    </Card> 
    </Link> 
    <Link to="/digital_marketing" style={{ textDecoration:"none" }}><Card style={{ width: '25rem' , marginLeft:"52%" , marginTop:"-25%" ,  cursor:"pointer" , borderBottom:"none" }} id="zoom2">
      <Card.Img variant="top" src="./dm.jpg" />
      <Card.Body>
        <Card.Title>Digital Marketing</Card.Title>
        <Card.Text>
        From Beginner to Advanced Level.<br></br>
        Learn how to become a Digital Marketer.
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>  
    <div>
    <div id="border1"></div> 
    <div id="border2"></div> 
    </div>
    </>
   ); 
}
export default Courses; 