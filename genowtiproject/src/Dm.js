import { faAngleDown, faAngleUp, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import "./Dm.css";
import Timehandle from './Timehandle';


const Dm = () => {
  
  const cardheadingtext1 = "Video Editing With Canva Marketing";
  const cardheadingtext2 = "Blogging Marketing";
  const cardheadingtext3 = "YouTube Marketing";
  const cardheadingtext4 = "Google Ads Marketing";
  const cardheadingtext5 = "Facebook Marketing";
  const cardheadingtext6 = "WhatsApp Marketing";

  const data1 = [
    { cardmenuitemtext1: "Introduction to Canva for Video Editing" },
    { cardmenuitemtext1: "Creating Engaging Video Content with Canva" },
    { cardmenuitemtext1: "Adding Text and Graphics to Videos in Canva" },
    { cardmenuitemtext1: "Incorporating Branding Elements in Canva Videos" },
    { cardmenuitemtext1: "Tips for Optimizing Canva Videos for Social Media Platforms" },
  ];

  
  const data2 = [
    { cardmenuitemtext2: "Writing Compelling Blog Posts" },
    { cardmenuitemtext2: "SEO Strategies for Blogging Success" }, 
    { cardmenuitemtext2: "Promoting Blog Content Across Social Media Channels" },
    { cardmenuitemtext2: "Monetization Techniques for Blogs" },
  ];


  const data3 = [
     { cardmenuitemtext3: "Creating a YouTube Channel Strategy"}, 
     { cardmenuitemtext3: "Video Content Ideation and Planning"},   
     { cardmenuitemtext3: "Optimizing YouTube Videos for Search (SEO)"},  
     { cardmenuitemtext3: "Collaborations and Community Building on YouTube"}, 
     { cardmenuitemtext3: "YouTube Analytics and Performance Tracking"},  

  ]; 

  const data4 = [
     
     {cardmenuitemtext4: "Understanding Google Ads Campaign Types"}, 
     {cardmenuitemtext4: "Keyword Research for Google Ads"}, 
     {cardmenuitemtext4: "Tracking and Analyzing Google Ads Performance"}, 
  ]; 
 
  const data5 = [
 
     {cardmenuitemtext5: "Building a Facebook Business Page"},   
     {cardmenuitemtext5: "Creating Engaging Facebook Posts and Ads"},   
     {cardmenuitemtext5: "Facebook Insights and Analytics"},   
     {cardmenuitemtext5: "Facebook Pixel and Retargeting Strategies"},   
     {cardmenuitemtext5: "Targeting and Audience Segmentation on Facebook"},   
 ];

 const data6 = [

    {cardmenuitemtext6:"Leveraging WhatsApp Business for Marketing"},  
    {cardmenuitemtext6:"Crafting Compelling WhatsApp Messages"}, 
    {cardmenuitemtext6:"WhatsApp Marketing Automation Tools"}, 
    {cardmenuitemtext6:"Building and Managing WhatsApp Broadcast Lists"}, 
    {cardmenuitemtext6:"Measuring Success with WhatsApp Analytics"}, 
 ];

  const [dropdown1, setDropDown1] = useState(false);
  const [dropdown2, setDropDown2] = useState(false); 
  const [dropdown3 , setDropDown3] = useState(false);
  const [dropdown4 , setDropDown4] = useState(false);
  const [dropdown5 , setDropDown5] = useState(false);
  const [dropdown6 , setDropDown6] = useState(false);

  
  const clickedFunction1 = () => {
    setDropDown1(!dropdown1);
  };

  const clickedFunction2 = () => {
    setDropDown2(!dropdown2); 
  };
  const clickedFunction3 = () => {
      setDropDown3(!dropdown3); 
 }; 
 const clickedFunction4 = () => {
   setDropDown4(!dropdown4); 
 }; 

 const clickedFunction5 = () => {
   setDropDown5(!dropdown5);
 }; 
 const clickedFunction6 = () => {
  setDropDown6(!dropdown6);
 }; 
 
  const styleapply = {
    border: "1px solid #edece8",
    width: "47.6rem",
    height: "45px",
    borderRight: "none",
    borderLeft: "none",
    paddingLeft: "30px",
    paddingTop: "10px",
    cursor: "pointer",
  };
 
   
  const browsertitle = "Courses";
  const navigate = useNavigate() 
  const [showTime, setShowTime] = useState(false);
  const handleWatchCourse = (videoLink) => {
    const data = JSON.parse(localStorage.getItem('myObject'));
    const userLoggedIn = data?.email?.length > 0;
    if (userLoggedIn) { 
      setShowTime(true); 
        const expiryTime = data?.expiryTime;
        const currentTime = new Date().getTime();
        if (expiryTime && currentTime < expiryTime) {
            // Session is valid
            window.open(videoLink || "", '_blank'); 
            
        } else {
            // Session has expired, redirect to login page
            localStorage.removeItem('myObject');
            navigate("/login");
        }
    } else {
        // User not logged in, redirect to login page
        localStorage.removeItem('myObject');
        navigate("/login");
    }
};

 const heading = "Digital Marketing Course Outline";

  return (
    <Container id="courseout"> 
      <h1>{showTime && <Timehandle />}</h1>
      <Helmet>
      <title>{browsertitle}</title> 
      </Helmet>
      <Row>
      <h1 style={{ 
          fontSize:"20px", 
          textAlign:"center", 
          color:"red", 
          textTransform:"uppercase", 
          fontWeight:"bold"
      }}>{heading}</h1>
        <Col>
          <div id="down1" onClick={clickedFunction1} style={{ paddingLeft: "10px" }}>
            {dropdown1 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext1}</div>
          </div>
          <div>
            {dropdown1 &&
              <>{data1.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div id="subcardtext">{item?.cardmenuitemtext1}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }}/> 
              
                    </div>
                  </Col>
                  <Col>
                    <div>
                     <p style={{ position: "absolute", top: "23%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/9gpx3RACjeU")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-20px"  }}>Lecture</button></p> 
                     <p style={{ position: "absolute", top: "30%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/9gpx3RACjeU")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-14px"  }}>Lecture</button></p>
                     <p style={{ position: "absolute", top: "38%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/9gpx3RACjeU")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-20px"  }}>Lecture</button></p>
                     <p style={{ position: "absolute", top: "46%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/9gpx3RACjeU")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-20px"  }}>Lecture</button></p>
                     <p style={{ position: "absolute", top: "53%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/9gpx3RACjeU")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-20px"  }}>Lecture</button></p>
                     </div>
                 </Col> 
                </Row>
              ))}</>}
          </div>
          <div id="down2" onClick={clickedFunction2} style={{ paddingLeft: "10px" }}>
            {dropdown2 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext2}</div>
          </div>
          <div>
            {dropdown2 &&
              <>{data2.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div style={styleapply}>{item?.cardmenuitemtext2}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                      
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>} 
            {dropdown2 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-22.3%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/VCUCDy9nY5g")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-35px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/VCUCDy9nY5g")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-35px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/VCUCDy9nY5g")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-40px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/VCUCDy9nY5g")}>Watch</p>
        </div>
      </Col>
    )}
          </div> 
          <div id="down3" onClick={clickedFunction3} style={{ paddingLeft: "10px" }}>
            {dropdown3 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext3}</div>
          </div>
          <div>
            {dropdown3 &&
              <>{data3.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div style={styleapply}>{item?.cardmenuitemtext3}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                     
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>} 
              {dropdown3 && (
            <Col>
            <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-28.3%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/SwkphPW3KXQ")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-35px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/SwkphPW3KXQ")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-35px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/SwkphPW3KXQ")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-40px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/SwkphPW3KXQ")}>Watch</p> 
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-40px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/SwkphPW3KXQ")}>Watch</p>      
          </div>
          </Col>
          )} 
          </div>  
          <div id="down4" onClick={clickedFunction4} style={{ paddingLeft: "10px" }}>
            {dropdown4 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext4}</div>
          </div>
          <div>
            {dropdown4 &&
              <>{data4.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div style={styleapply}>{item?.cardmenuitemtext4}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                    
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>} 
              {dropdown4 && (
            <Col>
            <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-15.8%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/gP2Ix6Rz2Do")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-35px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/gP2Ix6Rz2Do")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-40px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/gP2Ix6Rz2Do")}>Watch</p>      
          </div>
          </Col>
          )} 
          </div>   
          <div id="down5" onClick={clickedFunction5} style={{ paddingLeft: "10px" }}>
            {dropdown5 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext5}</div>
          </div>
          <div>
            {dropdown5 && 
              <>{data5.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div style={styleapply}>{item?.cardmenuitemtext5}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                   
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>} 

              {dropdown5 && (
          <Col>
          <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-27.8%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/5lE440b8Qf8")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-35px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/5lE440b8Qf8")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-40px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/5lE440b8Qf8")}>Watch</p>      
          <br></br> 
          <br></br> 
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-40px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/5lE440b8Qf8")}>Watch</p>      
          <br></br> 
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-40px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/5lE440b8Qf8")}>Watch</p>      
          </div>
          </Col>
          )} 
          </div>            
          <div id="down6" onClick={clickedFunction6} style={{ paddingLeft: "10px" }}>
            {dropdown6 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext6}</div>
          </div>
          <div>
            {dropdown6 && 
              <>{data6.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div style={styleapply}>{item?.cardmenuitemtext6}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                  
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}  

              {dropdown6 && (
          <Col>
          <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-27.8%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/kCOlTv201FU")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-35px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/kCOlTv201FU")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-40px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/kCOlTv201FU")}>Watch</p>      
          <br></br> 
          <br></br> 
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-40px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/kCOlTv201FU")}>Watch</p>      
          <br></br> 
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-40px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/kCOlTv201FU")}>Watch</p>      
          </div>
          </Col>
          )} 
          </div> 
         </Col>
      </Row>
    </Container>
    
  );
};
export default Dm; 