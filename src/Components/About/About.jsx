import React from 'react'

function About() {
  return (
    <>
        <section className=' h-[100vh] w-full pt-[8%] '>
            <div className='container mx-auto ' >


                <div className='flex justify-center '>
                    <div className='text-center' >
                        <h2 className=' text-[32px] text-[#00FFFF] ' >About Me</h2>
                        <div className='w-48 h-[2px] bg-[#fff] flex justify-center items-center rounded-md ' >
                            <div className=' w-16 h-1 bg-[#00FFFF] rounded-md ' ></div>
                        </div>
                    </div>
                </div>
                <div className=' w-4/12 mt-16   '>
                        <p>I'm currently pursuing a Bachelor's degree in Software Engineering, where I've developed a strong foundation in coding and problem-solving. My passion for web development led me to SMIT, where I honed my skills in creating responsive and user-friendly websites. I recently completed a front-end development internship at Global Dezigns, where I gained practical experience and further refined my abilities. I'm eager to continue learning and growing as a developer, contributing to innovative projects along the way.</p>
                </div>

                
            </div>
        </section>
    </>
  )
}

export default About