import React from 'react'
import logo from '../../Assets/Images/logo.png'

function NavBar() {


  return (
    <>
        <nav className='h-max w-full  text-[#DFDFDF] font-sans py-6 fixed z-50 '>
          <section className='container mx-auto '>

             <div className='flex justify-center text-center '>
                
                {/* <p className='text-[32px] font-extrabold '>My Portfolio</p> */}
                <p></p>

                <img src={logo} className=" w-[7%] " />

                {/* <button className=' border-2  rounded-full px-4 py-2 text-[14px] hover:bg-[#98FF98] hover:border-none hover:text-[#fff] ' >Download CV</button> */}

             </div>

             {/* <div>
                <ul className='flex gap-[48px] font-semibold '>
                    <li>HOME</li>
                    <li>SKILLS</li>
                    <li>ABOUT ME</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT ME</li>
                </ul>
             </div> */}

          </section>
        </nav> 
    </>
  )
}

export default NavBar