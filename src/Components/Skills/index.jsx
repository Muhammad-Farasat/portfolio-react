import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import './index.css'


gsap.registerPlugin(ScrollTrigger) 

function Skills() {

  
  
  useGSAP( () => {


    gsap.fromTo(".head", 
    { 
      y: '100%',
      opacity: 0, 
    }, 
    { 
      y: '0',
      opacity: 1, 
      scrollTrigger: {
          trigger: ".head",
          start: "top center",  // when the top of the element hits the center of the viewport
          end: "bottom center",    // when the bottom of the element hits the top of the viewport
          scrub: true,          // smooth fade in and out
          // markers: true,
        }
      }
    );

    gsap.fromTo(".progress", 
    { 
      y: '100%',
      opacity: 0, 
      duration: 8,
      delay: 4,
    }, 
    { 
      y: '0',
      opacity: 1, 
      duration: 8,
      delay: 4,
      scrollTrigger: {
          trigger: ".head",
          start: "top center",  // when the top of the element hits the center of the viewport
          end: "bottom center",    // when the bottom of the element hits the top of the viewport
          scrub: true,          // smooth fade in and out
          // markers: true,
        }
      }
    );


    

  }, [] )


  return (
    <>

        <section className=' h-[100%] w-[100vw] pt-[8%]  max-sm:h-[100vh] max-sm:pt-[12%] '>
              <div className='container'>

                {/* This is heading section */}

                <div className='  flex justify-center items-center flex-col mt-8 '>
                    <h3 className=' head text-[32px] text-[#00FFFF] max-sm:text-[22px] ' >Skills</h3>
                    <div>
                        <div className='w-32 h-[2px] bg-[#fff] flex justify-center items-center rounded-md  max-sm:w-24 ' >
                          <div className=' w-10 h-1 bg-[#00FFFF] rounded-md max-sm:w-8 ' ></div>
                        </div>                    
                    </div>
                </div>

                {/* This is ending of heading section */}

                <div className=' progress flex flex-wrap justify-center mx-auto mt-16 gap-28 max-sm:gap-8 max-lg:gap-x-16 max-lg:gap-y-10 ' >

                

                  <div className=' html w-5/12 max-sm:w-5/6 '>
                    <p className='max-sm:text-sm max-lg:text-md ' >HTML</p>
                    <ProgressBar 
                      completed={90}
                      bgColor="#00FFFF"
                      labelColor="#897F7F"
                      baseBgColor="#4e565a"
                      className="bars"
                    />
                  </div>

                  <div className=' css w-5/12 max-sm:w-5/6 '>
                    <p className='max-sm:text-sm max-lg:text-md '>CSS</p>
                    <ProgressBar 
                      completed={90}
                      bgColor="#00FFFF"
                      labelColor="#897F7F"
                      baseBgColor="#4e565a"
                      className="bars"
                    />
                  </div>

                  <div className=' js w-5/12 max-sm:w-5/6 '>
                    <p className='max-sm:text-sm max-lg:text-md'>Javascript</p>
                    <ProgressBar 
                      completed={70}
                      bgColor="#00FFFF"
                      labelColor="#897F7F"
                      baseBgColor="#4e565a"
                      className="bars"
                    />
                  </div>

                  <div className=' react w-5/12 max-sm:w-5/6 '>
                    <p className='max-sm:text-sm max-lg:text-md'>React</p>
                    <ProgressBar 
                      completed={80}
                      bgColor="#00FFFF"
                      labelColor="#897F7F"
                      baseBgColor="#4e565a"
                      className="bars"
                    />
                  </div>

                  <div className=' figma w-5/12 max-sm:w-5/6 '>
                    <p className='max-sm:text-sm max-lg:text-md'>Figma</p>
                    <ProgressBar 
                      completed={80}
                      bgColor="#00FFFF"
                      labelColor="#897F7F"
                      baseBgColor="#4e565a"
                      className="bars"
                    />
                  </div>

                  <div className=' tailwind w-5/12 max-sm:w-5/6 '>
                    <p className='max-sm:text-sm max-lg:text-md'>Tailwind / Bootstrap</p>
                    <ProgressBar 
                      completed={90}
                      bgColor="#00FFFF"
                      labelColor="#897F7F"
                      baseBgColor="#4e565a"
                      className="bars"
                    />
                  </div>



                </div>            




              </div>
        </section> 


    </>
  )
}

export default Skills