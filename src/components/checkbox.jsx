import React from 'react'

function Checkbox() {
  return (
    <div> <div className="flex items-center 
    ">
        <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 " />
        <label for="default-radio-2" className="ml-2 text-sm font-medium  ">Checked state</label>
    </div></div>
  )
}

export default Checkbox