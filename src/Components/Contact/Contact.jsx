import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import { IoIosArrowUp } from "react-icons/io";
import { MdEmail  } from "react-icons/md";

function Contact() {

  const [isExpand, setIsExpand] = useState(false);

  const toggleHeight = () => {
    setIsExpand(!isExpand)
  }

  return (
    <>
        <section className=' flex justify-center container absolute bottom-0  '>
            <section className={`  backdrop-blur-md bg-[#58585867]  transition-height duration-300 ${ isExpand ? 'h-64' : 'h-14' } w-11/12 `} >
              
              <div className=' flex justify-between mx-6 my-4 text-2xl '>
                <h3>Contact Info</h3>
                <IoIosArrowUp className={`${isExpand ? 'rotate-180' : ''} transform transition-transform duration-300  `} onClick={toggleHeight} />
              </div>

              { isExpand && (<main className={` space-y-6 ${isExpand ? 'none' : 'block'} `}>

                <div className='flex items-center gap-4 mx-6 '>
                  <FaGithub className=' text-2xl ' />
                  <a href="https://github.com/Muhammad-Farasat">Muhammad-Farasat</a>
                </div>

                <div className='flex items-center gap-4 mx-6 '>
                  <FaWhatsapp className=' text-2xl ' />
                  <p>+92 315 2557056</p>
                </div>

                <div className='flex items-center gap-4 mx-6 '>
                  <MdEmail  className=' text-2xl ' />
                  <p>farasatkhan687@gmail.com</p>
                </div>


              </main>)}

            </section>
        </section>
    </>
  )
}

export default Contact