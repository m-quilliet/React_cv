import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import canvas from "../../assets/images/canvas.jpeg"
import communication from "../../assets/images/communication.png"
import creativite from "../../assets/images/creativite.png"
import rouleau from "../../assets/images/rouleau.png"
import cat from "../../assets/images/cat.png"
import Fade from 'react-reveal/Fade';
import "./aboutme.css"

const Me = () => {
  return (
    <Fade right>
      <Container className="d-flex flex-wrap justify-content-center align-items-center vh-100">
        <Row className="" >
          <Col className=''>
            <img src={canvas} alt="" className="img"/>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center align-items-center my-5">
          <Col className='d-flex flex-column  align-items-center'>
          <Fade top>
              <h1 className='maib fw-bolder mb-4'>Maibelline QUILLIET</h1>
              <h3>Qui suis-je ?</h3>
              <p className='lorem m-4'> Suite à une remise en question professionnelle,
              <br/>j'ai entrepris une reconversion dans le domaine du numérique.
              <br/>
              
                J'ai obtenu mon titre de "Développeur Web et Web Mobile" en Juin 2022.
                <br/>
                
                J'ai ensuite suivie une formation de Développeur d'Applications Mobiles,
                <br/>(React Native) pour étoffer mon panel de compétences.
                <br/>
                
                Autonome, je me forme en ce moment sur React.js 
                <br/>
                et Symfony 5 en auto-didacte.
                <br/>
                Je souhaiterais intégrer une entreprise désireuse de partager 
                <br/> ses connaissances</p>
              <h3>Intérets</h3>
                

            </Fade>

          <Col className='d-flex flex-row mt-3'>
          <Fade top>
              <img src={communication} height="65" alt="" className="communication"/>
              <img src={creativite} height="65" alt="" className="creativite"/>
              <img src={rouleau} height="65" alt="" className="rouleau"/>
              <img src={cat} height="65" alt="" className="cat"/>
          </Fade>
            </Col>

          </Col>
        </Row> 

      </Container>
    </Fade>    
  )
}

export default Me

