import React from "react";
import { Row, Col, Container} from 'react-bootstrap'
import profil from "../../assets/images/snapchat.png"
import Slide from 'react-reveal/Slide';
import cv from '../../assets/Cv-WebDesigner.pdf'
import "./header.css";


export const Header = () => { 
  return (
    <Slide right>
      <Container id="Home" className="home p-5 min-vh-100 justify-content-center align-items-center">
        <Row>
          <Col className="catch-phrase m-4">
            <h1>
              Hi , I am Maibelline <br /> <span>Développeuse Front-end | Webdesigner</span>
            </h1>
            <span>
              Développeuse web et web mobile (bac+2) diplômée depuis juin 2022.
              Passionnée par l'Ui Design, je suis à la recherche d'un contrat de professionnalisation
              pour le titre professionnel de Webdesigner afin de me spécialiser dans tous les aspects du développement et de l'intégration front-end.
            </span> 
            <br/>
            <span>Je serais ravie d'intégrer une équipe de professionnels passionnés et passionnants pour m'accompagner dans ce projet.
            </span>
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