import React from "react";
import { Row, Col, Container } from 'react-bootstrap'
import profil from "../../assets/images/snapchat.png"
import Slide from 'react-reveal/Slide';
import "./header.css";


export const Header = () => { 
  return (
    <Slide right>
      <Container id="Home" className="home min-vh-100 justify-content-center align-items-center">
        <Row>
          <Col className="catch-phrase">
            <h1>
              Hi , I am Maibelline <br /> <span>Developpeuse Fullstack Junior</span>
            </h1>
            <p>
              Développeuse web et web mobile à la recherche d'un contrat de professionnalisation en C.D.A.
              <br />
              Je serais ravie d'acquérir de nouvelles compétences à vos cotés.
            </p>
            <Col className="buttons">
              <button className="cv">Télècharger mon CV</button>
              <button className="hire-me">À propos de moi</button>
            </Col>
          </Col>
        </Row>
      <Row>
        <Col  className="profil">
          <img src={profil} height='500' className="maibelline" alt="maibelline"/>
        </Col> 
      </Row>
    </Container>
    </Slide>
  );
}