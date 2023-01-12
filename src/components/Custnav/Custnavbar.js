import React, { useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import { ImHome} from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { FaToolbox} from 'react-icons/fa';
import { RiServiceFill } from 'react-icons/ri';
import "./custnavbar.css"


export const Custnavbar = () => { 
  return (
    <div>
    <div className="header__socials">
      <a href="mailto:mayb80@hotmail.fr" target="_blank"><BsEnvelopeFill /></a>
      <a href="https://www.linkedin.com/in/maibelline-quilliet-41492a20b/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/m-quilliet" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
        <div className="header__header">
        <a href=""><ImHome /></a>
        <a href="" target="_blank" rel="noreferrer" >< FaUser/></a>
        <a href="" target="_blank" rel="noreferrer" >< FaToolbox/></a>
        <a href="" target="_blank" rel="noreferrer" >< RiServiceFill/></a>
  
      </div>
      </div>
  )
}




