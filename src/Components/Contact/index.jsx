import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
            <section className={`  backdrop-blur-md bg-[#58585867]  transition-height duration-300 ${ isExpand ? 'h-64' : 'h-14 max-sm:h-10 ' } w-11/12 `} >
              
              <div className=' flex justify-between mx-6 my-4 text-2xl max-sm:text-sm '>
                <h3>Contact Info</h3>
                <IoIosArrowUp className={`${isExpand ? 'rotate-180' : ''} cursor-pointer transform transition-transform duration-300  `} onClick={toggleHeight} />
              </div>

              { isExpand && (<main className={` space-y-6 ${isExpand ? 'none' : 'block'} `}>

                <div className='flex items-center gap-4 mx-6 '>
                  <FaGithub className=' text-2xl max-sm:text-sm ' />
                  <a href="https://github.com/Muhammad-Farasat" className='max-sm:text-xs'>Muhammad-Farasat</a>
                </div>

                <div className='flex items-center gap-4 mx-6 '>
                  <FaWhatsapp className=' text-2xl max-sm:text-sm ' />
                  <p className='max-sm:text-xs'>+92 315 2557056</p>
                </div>

                <div className='flex items-center gap-4 mx-6 '>
                  <MdEmail  className=' text-2xl max-sm:text-sm ' />
                  <p className='max-sm:text-xs'>farasatkhan687@gmail.com</p>
                </div>

                <div className='flex items-center gap-4 mx-6 '>
                  <FaLinkedin className=' text-2xl max-sm:text-sm ' />
                  <a href="https://www.linkedin.com/in/muhammad-farasat1/" className='max-sm:text-xs'>Muhammad Farasat</a>
                </div>


              </main>)}

            </section>
        </section>
    </>
  )
}

export default Contact