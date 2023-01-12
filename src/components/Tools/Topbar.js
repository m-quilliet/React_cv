import React, { useState } from 'react';
import { TiHomeOutline} from 'react-icons/ti';
import { AiOutlineUser } from 'react-icons/ai';
import { CgToolbox} from 'react-icons/cg';
import { RiServiceLine } from 'react-icons/ri';
import { BsEnvelope } from 'react-icons/bs';

import './topbar.css';


export const Topbar = () => {
   
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><TiHomeOutline /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><CgToolbox /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsEnvelope /></a>
    </nav>
  )
}
