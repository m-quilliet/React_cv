import React from "react";
import { Row, Col, Container} from 'react-bootstrap'
import profil from "../../assets/images/snapchat.png"
import Slide from 'react-reveal/Slide';
import cv from '../../assets/CVResume.pdf'
import "./header.css";


export const Header = () => { 
  return (
    <Slide right>
      <Container id="Home" className="home min-vh-100 justify-content-center align-items-center">
        <Row>
          <Col className="catch-phrase ms-4">
            <h1>
              Hi , I am Maibelline <br /> <span>Developpeuse Front-end Junior</span>
            </h1>
            <p>
              Développeuse web et web mobile à la recherche d'une première opportunité ou
              <br/> d'un contrat de professionnalisation en C.D.A (Concepteur développeur d'application).
              <br />
              Je serais ravie d'acquérir de nouvelles compétences à vos cotés.
            </p>
            <Col className="buttons">
            <a className="a" href={ cv } download><button className="cv" type="submit">Telecharger mon CV</button></a>
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