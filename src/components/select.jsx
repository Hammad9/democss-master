import React from 'react'

function Select() {
  return (
    <div>
        
<select id="countries" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-black dark:focus:border-black">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
    </div>
  )
}

export default Select