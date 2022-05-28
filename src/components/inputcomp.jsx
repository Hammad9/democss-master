import React from 'react'
import './inpputcomp.css'
function Inputcomp(props) {
  return (
    <div >
      <label for="large-input" className={`block mb-2 text-sm font-medium ${props.innerLabel !== true ? 'innerLabel' : 'normalLabel'} `} >{props.label}</label>
      <input type="text" id="large-input" placeholder={props.title} className="bg-inherit border border-gray-300 
      text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5  dark:border-gray-600 
      dark:placeholder-gray-400  dark:focus:ring-black dark:focus:border-black" />
    </div>
  )
}

export default Inputcomp