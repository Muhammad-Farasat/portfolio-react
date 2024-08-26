import React from 'react'
import folio_1 from '../../Images/portfolio_1.png'
import folio_2 from '../../Images/portfolio_2.png'

function Projects() {
  return (
    <>
      <section className='h-[100%] w-full pt-[8%]  '>
          <div className="container">

            <div className=' flex justify-center flex-col items-center '>
              <h3 className=' head text-[32px] text-[#00FFFF] '>Projects</h3>
              <div>
                  <div className='w-40 h-[2px] bg-[#fff] flex justify-center items-center rounded-md ' >
                    <div className=' w-12 h-1 bg-[#00FFFF] rounded-md ' ></div>
                  </div>                    
              </div>
            </div>

            <div className=' mt-20 flex justify-evenly '>

              <div className= 'w-80 h-72 rounded-md relative cursor-pointer   '>

                <a href="https://focas.netlify.app/">
                  <img src={folio_1} className=' h-full w-full object-cover object-center-bottom rounded-md '  />

                  <div className='absolute inset-0 bg-[#00000070] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out'>

                    <div className=' absolute bottom-0 bg-[#000000a2] rounded-t-none rounded-md h-24 w-full p-2 ' >
                      <p className=' text-sm  ' >This is E-commerce website front-end design made on Vite,React. <br /> Click to visit the website.</p>
                    </div>

                  </div>
                </a>


              </div>

              <div className= 'w-80 h-72 relative cursor-pointer rounded-md hover:bg-[#00000070]  '>

                <a href="https://to-do-react-five-lemon.vercel.app/">                  
                  <img src={folio_2} className=' h-full object-cover object-center-bottom rounded-md  '  />
                  <div className='absolute inset-0 bg-[#00000070] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out'>

                      <div className=' absolute bottom-0 bg-[#000000a2] rounded-t-none rounded-md h-24 w-full p-2 ' >
                        <p className=' text-sm  ' >This is PWA based Todo website made on Vite,React. <br /> Click to visit the website.</p>
                      </div>

                  </div>
                </a>

              </div>

              <div className= 'w-80 h-72 relative text-3xl flex justify-center items-center bg-slate-400 cursor-pointer rounded-md hover:bg-[#00000070]  '>
                Coming Soon
                {/* <img src={folio_1} className=' h-full object-cover object-center-bottom rounded-md  '  /> */}
                <div className='absolute inset-0 bg-[#00000070] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out'></div>
              </div>

            </div>


          </div>
      </section>
    </>
  )
}

export default Projects