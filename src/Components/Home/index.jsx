import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import React from 'react'

gsap.registerPlugin(ScrollTrigger)


function Home() {


  useGSAP(() =>{


    gsap.fromTo(".top_left", 
      { x: -1000 },  
      { 
        x: 0,         
        duration: 1,
        ease: "power2.out",
        }
    );

    gsap.fromTo(".top_right", 
      { x: 10000 },   
      { 
        x: 0,         
        duration: 1,
        ease: "power2.out",  
        }
    );

    
    gsap.fromTo(".top_left", 
      { x: 0 },      
      { 
        x: -1000,   
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: '.top_left',
          start: 'top center',
          end: 'top 100px',
          scrub: 1,
          toggleActions: "play reverse play reverse" // Controls behavior when scrolling up/down
        }
      }
    );

    gsap.fromTo(".top_right", 
      { x: 0 },     
      { 
        x: 10000,     
        duration: 1,
        ease: "power2.inOut",  
        scrollTrigger: {
          trigger: '.top_right',
          start: 'top center',
          end: 'top 100px',
          scrub: 1,
          toggleActions: "play reverse play reverse"
        }
      }
    );


    gsap.fromTo(".main_name", 
      { 
        opacity: 1, 
      }, 
      { 
        opacity: 0, 
        scrollTrigger: {
            trigger: ".main_name",
            start: "bottom center",  // when the top of the element hits the center of the viewport
            end: "bottom top",    // when the bottom of the element hits the top of the viewport
            scrub: true,          // smooth fade in and out
            // markers: true,
          }
        }
      );

  });


  return (
    <>

        <main className=' h-[100vh]  w-full flex justify-center '>


          <div className='relative flex justify-center items-center '>
              <div className="bg_text absolute">
                <h1 className='   text-[#313131] text-[240px] font-black max-xl:text-[200px] max-[360px]:text-[60px] 
                max-[460px]:text-[80px] max-md:text-[130px] max-lg:text-[150px] '>WEBDEV</h1>
              </div>
              <div className=' z-10 leading-none ' >

                <div className=' top_left font-black text-[24px] text-[#00FFFF] max-sm:text-[10px] max-md:text-[14px] max-lg:text-[16px]  ' >
                  <p>Frontend Developer</p>
                </div>
                
                <div className="main_text  ">
                  <h1 className=' main_name text-[164.23px] font-black tracking-[30px] max-xl:text-[150px] max-sm:text-[40px] max-sm:tracking-[10px] max-[460px]:text-[50px] max-md:text-[88px] max-md:tracking-[12px] max-lg:text-[110px] max-lg:tracking-[12px] '>FARASAT</h1>
                </div>

                <div className=' top_right font-black text-[24px] flex justify-end  text-[#00FFFF] mt-0 max-sm:text-[10px] max-md:text-[14px] max-lg:text-[16px] ' >
                  <p>Welcome to my portfolio</p></div>
                </div>


          </div>

        </main>
    </>
  )
}

export default Home