import React from 'react'
import folio_1 from '../../Assets/Images/portfolio_1.png'
import folio_2 from '../../Assets/Images/portfolio_2.png'

function Projects() {
  return (
    <>
      <section className='h-[100%] w-full pt-[8%] max-sm:h-[100vh] max-sm:pt-[18%]  '>
          <div className="container  ">

            <div className=' flex justify-center flex-col items-center '>
              <h3 className=' head text-[32px] text-[#00FFFF] max-sm:text-[22px] '>Projects</h3>
              <div>
                  <div className='w-40 h-[2px] bg-[#fff] flex justify-center items-center rounded-md max-sm:w-28 ' >
                    <div className=' w-12 h-1 bg-[#00FFFF] rounded-md max-sm:w-8  ' ></div>
                  </div>                    
              </div>
            </div>

            <div className=' mt-20 flex flex-wrap justify-evenly max-[399px]:justify-center max-sm:gap-y-20 max-sm:gap-x-8 max-sm:justify-start max-sm:px-6 max-sm:mt-12 '>

              <div className= 'w-72 h-72 rounded-md relative cursor-pointer hover:border-2 hover:border-[#00FFFF] max-[399px]:w-48 max-[399px]:h-28 max-sm:w-40 max-sm:h-40  '>

                <a href="https://focas.netlify.app/">
                  <img src={folio_1} className=' h-full w-full object-cover object-center-bottom rounded-md max-[399px]:object-top  '  />

                  <div className='absolute inset-0 bg-[#00000070] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out  '>
                  </div>

                  <div className='mt-4 flex justify-between'>                    
                    <p className=' text-xl max-sm:text-xs ' >E-commerce Website </p> 
                    <button className=' border rounded-full p-2 text-xs hover:bg-[#eaeaea] hover:text-[#111] max-[399px]:text-[8px] max-sm:p-1 max-sm:text-[10px] max-sm:w-20 max-sm:rounded-xl ' >Click Above</button>
                  </div>

                </a>


              </div>

              <div className= 'w-72 h-72 relative cursor-pointer rounded-md hover:bg-[#00000070] hover:border-2 hover:border-[#00FFFF] max-[399px]:w-48 max-[399px]:h-28 max-sm:w-40 max-sm:h-40 '>

                <a href="https://to-do-react-five-lemon.vercel.app/">                  

                  <img src={folio_2} className=' h-full object-cover object-center-bottom rounded-md    '  />

                  <div className='absolute inset-0 bg-[#00000070] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out  '>
                  </div>

                  <div className='mt-4 flex justify-between'>                    
                      <p className=' text-xl max-sm:text-xs ' >Todo PWA Website </p> 
                      <button className=' border rounded-full p-2 text-xs hover:bg-[#eaeaea] hover:text-[#111] max-sm:text-[10px] max-sm:p-1 max-sm:w-20 max-sm:rounded-xl ' >Click Above</button>
                  </div>

                </a>

              </div>

              <div className= 'w-72 h-72 relative text-3xl flex justify-center items-center bg-slate-400 cursor-pointer rounded-md hover:bg-[#00000070] max-[399px]:w-48 max-[399px]:h-28 max-sm:w-40 max-sm:h-40 '>
                <p className=' max-sm:text-sm '>Coming Soon</p>
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