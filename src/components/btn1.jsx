import React from 'react'
import pic1 from '../assets/pic11.png'
function Btn1() {
  return (
 
        <button type="button" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                                    <span><img src={pic1} alt="" /></span>
                                    Etherium
                                </button>

  )
}

export default Btn1