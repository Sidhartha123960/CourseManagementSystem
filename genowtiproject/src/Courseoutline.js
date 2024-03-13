import { faAngleDown, faAngleUp, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import "./Courseoutline.css";
import Timehandle from "./Timehandle";

const Courseoutline = () => {
  
  const cardheadingtext1 = "Java (Object Oriented Programming)";
  const cardheadingtext2 = "J2EE-Web Development";
  const cardheadingtext3 = "HTML5 And CSS3";
  const cardheadingtext4 = "Bootstrap 4";
  const cardheadingtext5 = "DB Basics";
  const cardheadingtext6 = "Spring Framework";
  const cardheadingtext7 = "WebService";
  const cardheadingtext8 = "SpringBoot";
  const cardheadingtext9 = "Micro Service";
  const cardheadingtext10 = "React";  
  const cardheadingtext11 = "DevOps CI/CD";



  const data1 = [
    { cardmenuitemtext1: "Class And Object" },
    { cardmenuitemtext1: "Inheritance" },
    { cardmenuitemtext1: "Abstraction" },
    { cardmenuitemtext1: "Interface" },
    { cardmenuitemtext1: "Exception Handling" },
    { cardmenuitemtext1: "Threads" },
    { cardmenuitemtext1: "File Handling" }
  ];

  
  const data2 = [
    { cardmenuitemtext2: "Servlets" },
    { cardmenuitemtext2: "JSP" },
  ];


  const data3 = [
     { cardmenuitemtext3: "Fundamental Of HTML5 With Example"}, 
     { cardmenuitemtext3: "Fundamental Of CSS3  With Example"}, 
  ]; 

  const data4 = [
     
     {cardmenuitemtext4: "Fundamental Of Bootstrap 4 With Example"}, 

  ]; 
 
  const data5 = [
 
     {cardmenuitemtext5: "Concept Of SQL With Example"},   
 ];

 const data6 = [

    {cardmenuitemtext6:"Spring Framework With Example"}, 

 ];
const data7 = [
   {cardmenuitemtext7: "Concept Of Webservice"}, 

];
const data8 = [
   {cardmenuitemtext8: "SpringBoot With Example"},  
];
const data9 = [
   
   {cardmenuitemtext9: "Microservice With Example"}, 

];
const data10 = [
   {cardmenuitemtext10:"Concept Of React With Example"}, 
];

const data11 = [
   {cardmenuitemtext11: "Understanding Devops"},
   {cardmenuitemtext11: "CI/CD Pipeline Using Jenkins"},  

];


  const [dropdown1, setDropDown1] = useState(false);
  const [dropdown2, setDropDown2] = useState(false); 
  const [dropdown3 , setDropDown3] = useState(false);
  const [dropdown4 , setDropDown4] = useState(false);
  const [dropdown5 , setDropDown5] = useState(false);
  const [dropdown6 , setDropDown6] = useState(false);
  const [dropdown7 , setDropDown7] = useState(false);
  const [dropdown8 , setDropDown8] = useState(false);
  const [dropdown9 , setDropDown9] = useState(false);
  const [dropdown10 , setDropDown10] = useState(false); 
  const [dropdown11 , setDropDown11] = useState(false); 
  

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
 const clickedFunction7 = () => {
   setDropDown7(!dropdown7); 
 }; 
 const clickedFunction8 = () => {
   setDropDown8(!dropdown8);
 };
 const clickedFunction9 = () => {
    setDropDown9(!dropdown9);
 };
const clickedFunction10 = () =>{
    setDropDown10(!dropdown10);
};
const clickedFunction11 = () => {
    setDropDown11(!dropdown11);
};
   
  const styleapplyinj2ee = {
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
      }}>Java Full Stack Course Outline</h1>
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
                     <p style={{ position: "absolute", top: "23%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/tdVp_f2-teY")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-20px"  }}>Lecture</button></p> 
                     <p style={{ position: "absolute", top: "30%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/tdVp_f2-teY")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-14px"  }}>Lecture</button></p>
                     <p style={{ position: "absolute", top: "38%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/tdVp_f2-teY")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-20px"  }}>Lecture</button></p>
                     <p style={{ position: "absolute", top: "46%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/tdVp_f2-teY")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-20px"  }}>Lecture</button></p>
                     <p style={{ position: "absolute", top: "53%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/tdVp_f2-teY")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-20px"  }}>Lecture</button></p>
                     <p style={{ position: "absolute", top: "60%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/tdVp_f2-teY")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-20px"  }}>Lecture</button></p> 
                     <p style={{ position: "absolute", top: "68%", fontSize: "13px", marginLeft: "44rem" , cursor:"pointer" }} onClick={() => handleWatchCourse("https://youtu.be/-L591TsyvmM")}>Watch<br></br><button style={{ backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" ,   display:"flex" , justifyContent:"start" ,  marginLeft:"-100px" , marginTop:"-20px"  }}>Lecture</button></p>
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
                    <div style={styleapplyinj2ee}>{item?.cardmenuitemtext2}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                      
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}

              {dropdown2 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-10%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/0xtk3lwHHFc")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-35px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/wpsWMZf-gto")}>Watch</p>  
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
                    <div style={styleapplyinj2ee}>{item?.cardmenuitemtext3}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                      
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}
            
          {dropdown3 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-10%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/rMlcWu5KQmg")}>Watch</p>
          <br></br>
          <br></br>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-35px", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/ewHChOtrBIQ")}>Watch</p>  
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
                    <div style={styleapplyinj2ee}>{item?.cardmenuitemtext4}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                    
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}
              {dropdown4 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-4.2%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/EJ5Xl2PlI2U")}>Watch</p> 
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
                    <div style={styleapplyinj2ee}>{item?.cardmenuitemtext5}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                   
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}
              {dropdown5 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-4.5%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/EZ8-QD63aAM")}>Watch</p>
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
                    <div style={styleapplyinj2ee}>{item?.cardmenuitemtext6}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                      
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}
           
              {dropdown6 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-4.4%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/_QZnEAv3EWY")}>Watch</p>
        </div>
      </Col>
       )}
          </div> 
          <div id="down7" onClick={clickedFunction7} style={{ paddingLeft: "10px" }}>
            {dropdown7 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext7}</div>
          </div>
          <div>
            {dropdown7 && 
              <>{data7.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div style={styleapplyinj2ee}>{item?.cardmenuitemtext7}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                  
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}
           
              {dropdown7 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-4.5%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/-l7Qw5GfbaY")}>Watch</p>
        </div>
      </Col>
       )}

          </div> 
          <div id="down8" onClick={clickedFunction8} style={{ paddingLeft: "10px" }}>
            {dropdown8 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext8}</div>
          </div>
          <div>
            {dropdown8 && 
              <>{data8.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div style={styleapplyinj2ee}>{item?.cardmenuitemtext8}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                  
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}
          
              {dropdown8 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-4.5%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/29BoWNABfOI")}>Watch</p>
        </div>
      </Col>
       )}
          </div> 
          <div id="down9" onClick={clickedFunction9} style={{ paddingLeft: "10px" }}>
            {dropdown9 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext9}</div>
          </div>
          <div>
            {dropdown9 && 
              <>{data9.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div style={styleapplyinj2ee}>{item?.cardmenuitemtext9}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
                  
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}
              {dropdown9 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-4.5%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/bKd7Y5sj3I4")}>Watch</p>
        </div>
      </Col>
       )}
          </div> 

          <div id="down10" onClick={clickedFunction10} style={{ paddingLeft: "10px" }}>
            {dropdown10 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext10}</div>
          </div>
          <div>
            {dropdown10 && 
              <>{data10.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div style={styleapplyinj2ee}>{item?.cardmenuitemtext10}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
          
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}        
              {dropdown10 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-4.5%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("#")}>Watch</p>
        </div>
      </Col>
       )}
          </div> 
          <div id="down11" onClick={clickedFunction11} style={{ paddingLeft: "10px" }}>
            {dropdown11 ? <FontAwesomeIcon icon={faAngleUp} size="lg" /> : <FontAwesomeIcon icon={faAngleDown} size="lg" />}
            <div style={{ paddingLeft: "16px" }}>{cardheadingtext11}</div>
          </div>
          <div>
            {dropdown11 && 
              <>{data11.map((item, i) => (
                <Row key={i}>
                  <Col>
                    <div style={styleapplyinj2ee}>{item?.cardmenuitemtext11}
                      <FontAwesomeIcon icon={faCirclePlay} style={{ marginLeft: "656px", display: "flex", justifyContent: "start", marginTop: "-20px", color: "#205ca8" }} />
            
                    </div>
                  </Col>
                  <button style={{ width:"60px", paddingLeft:"6px" , height:"26px",   backgroundColor:"#996d05" , color:"white" , borderColor:"#996d05" , marginTop:"-35px" , marginLeft:"38.5rem" , fontSize:"13px" }}  >Lecture</button>
                </Row>
              ))}</>}
              {dropdown11 && (
          <Col>
        <div>
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-10%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/tKIbmY9-CA4")}>Watch</p> 
          <br></br> 
          <br></br> 
          <p style={{ marginLeft: "704px", display: "flex", justifyContent: "start", marginTop: "-5%", color: "#205ca8", fontSize: "13px", textDecoration: "none", cursor: "pointer" }} onClick={() => handleWatchCourse("https://youtu.be/tBOYaX9rU-A")}>Watch</p> 
        </div>
      </Col>
       )}
          </div> 
         </Col>
      </Row>
    </Container>
    
  );
};
export default Courseoutline;