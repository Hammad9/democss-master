import React from 'react'


import pic from '../../assets/pic0.png'
import { FiUpload } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { FaRetweet } from 'react-icons/fa'
import Checkbox from '../../components/checkbox'

function Listnftstep3() {
  return (
    <div>
      <div className="flex flex-col justify-between h-screen">

        <main className="mb-auto mx-60 my-16   ">
          <div className='mx-60 my-16'>
            <h1 className="text-6xl">Successfully Minted!</h1>
            <div>
              <h3>where would you like to share?</h3>

              <div className="flex">
                <div className="flex items-center mr-4">
                  <Checkbox />

                </div>
                <div className="flex items-center mr-4">
                  <Checkbox />
                </div>
                <div className="flex items-center mr-4">
                  <Checkbox />

                </div>


              </div>

              <div className='grid grid-cols-3 gap-0'>
                <div className="m-5  overflow-hidden  relative">
                  <img src={pic} alt="" />

                  <div>
                    <div className="text-white absolute top-0 bg-gray-500 rounded">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="m-5  overflow-hidden  relative">
                  <img src={pic} alt="" />

                  <div>
                    <div className="text-white absolute top-0 bg-gray-500 rounded">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="m-5  overflow-hidden  relative">
                  <img src={pic} alt="" />

                  <div>
                    <div className="text-white absolute top-0 bg-gray-500 rounded">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='space-x-4'><span >Instagram</span><span>Instagram</span><span>Instagram</span></div>
              </div>


              <div className='border-2'>
                <div className='flex gap-2'>
                  <div>

                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={require('../../assets/pic99.avif')} alt="Bonnie image" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium  truncate ">
                          Bonnie Green
                        </p>
                        <p class="text-sm truncate ">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-6'>

                    <img src={pic} alt="" /><img src={pic} alt="" />
                  </div>
                </div>
                <div className='w-full flex gap-6 '>
                  <FiUpload /><AiOutlineHeart /><AiOutlineMessage /><FaRetweet /></div> </div>
              <div className='flex flex-col my-4'>

                <button className='px-8 py-3'>Sign Up</button>
              </div>
              <div>

              </div>

            </div>
          </div>
        </main>
      </div>

    </div>
  )
}

export default Listnftstep3