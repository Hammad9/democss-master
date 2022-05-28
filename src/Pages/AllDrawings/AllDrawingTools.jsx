import React from 'react'
import pic1 from '../../assets/DiffGrad.png'
import Btns from '../../components/btns'
import UploadFile from '../../components/uploadFile'
import Inputcomp from '../../components/inputcomp'
import './AllDrawingTools.css'




function AllDrawingTools() {
  return (
    <div >
      <div className="container mx-auto">
        <h3 className='text-4xl my-5 ml-24'> All Drawing Tools</h3>
        <div key={1} className="flex mx-2">
          <div className='grid grid-cols-3 md:grid-col-2 gap-3'>
            <div className='mb-5'>
            <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />
            <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />
            <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />
            </div>
            <div>
            <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />
            <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />
            <img className="rounded-t-lg mb-5" src={pic1} alt="Card Images" />
            </div>
          </div>
          <div className='grid grid-cols-1 gap-1'>
            <div className="">
              <div className="mb-6">
                <Inputcomp title="Sunset at sea with a purple sky" label={'Text Prompt'} innerLabel={true}/>
              </div>
              <div className="mb-6">

                <select id="countries" className="bg-inherit border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-black dark:focus:border-black">
                  <option selected>Select</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="mb-6">

                <select id="countries" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-black dark:focus:border-black">
                  <option selected>Select</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>
                <div className="text-sm">Art style</div>
                <div>
                  <Btns title='Abstract' />
                  <Btns title='Figuratie' />
                  <Btns title='Geometric' />
                  <Btns title='Minimalist' />
                </div>
                <div>
                  <Btns title='Nature' />
                  <Btns title='Pop' />
                  <Btns title='Surrealist' />
                  <Btns title='Urban' />
                </div>

              </div>
              <div className="text-xl">Upload Base Image</div>
              <UploadFile />

            </div>
            <div className='flex flex-col my-4'>
              <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
              <button className='px-8 py-3'>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllDrawingTools