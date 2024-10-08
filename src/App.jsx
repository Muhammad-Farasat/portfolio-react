import './App.css'
import NavBar from './Components/NavBar/index'
import Home from './Components/Home/index'
import { gsap } from "gsap";
import Skills from './Components/Skills/index';
import About from './Components/About/index';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Projects from './Components/Projects/index';
import Contact from './Components/Contact/index';


gsap.registerPlugin(ScrollTrigger) 

function App() {
  
  
  useGSAP( () => {

    let sections = gsap.utils.toArray(".section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1), 
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll_container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length -1) ,
        end: () => "+=" + document.querySelector('.scroll_container').offsetWidth
      }
    });
  }, [])


  return (
    <>

      <NavBar/>
      <div className=""><Home /></div>

        <div className='scroll_container absolute z-[1] ' >
          <div className="section"><Skills /></div>
          <div className="section"><About /></div>
          <div className="section"><Projects /></div>
          {/* <div className="section"><Contact /></div> */}
        <Contact className='  z-10 w-full '  />
        </div>

  


    </>
  )
}

export default App
