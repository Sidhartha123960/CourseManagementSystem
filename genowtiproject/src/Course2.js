import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Course2.css"
import Courseinclude from './Courseinclude.js'
import Dm from './Dm.js'

export const Course2 = () =>
{
       return (
          <>
         <Container  id="Dmtest1" fluid>
            <Row>   
                <Col md={7}><Dm /></Col>
                <Col md={4}><Courseinclude /></Col>
            </Row>
        </Container>
        </>
       ); 
}