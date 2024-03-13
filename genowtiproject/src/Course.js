import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Course.css"
import Courseinclude from './Courseinclude.js'
import Courseoutline from './Courseoutline.js'


export const Course = () =>
{
       return (
          <> 
         <Container  id="test1" fluid>
            <Row>   
                <Col md={7}><Courseoutline /></Col>
                <Col md={4}><Courseinclude /></Col>
            </Row>
        </Container>
          </>
       ); 
}