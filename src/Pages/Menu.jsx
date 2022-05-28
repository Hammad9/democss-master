import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function Menu() {
  
  return (
    <div>
      <div className="flex flex-col justify-between h-screen">

        <main className="mb-auto h-52 my-16 mx-72 ">

          <div className=''>
          <ul>
          <li className="text-3xl text-purple-600"><Link to="/connectwallet">ConnectWallet</Link></li>
          <li className="text-3xl text-purple-600"><Link to="/alldrawingtools">DrawingTools</Link></li>
          <li className="text-3xl text-purple-600"><Link to="/listnftstep2">List Nft Step2</Link></li>
          <li className="text-3xl text-purple-600"><Link to="/listnftstep3">List Nft Step3</Link></li>
          <li className="text-3xl text-purple-600"><Link to="/pooldata">Pool Data</Link></li>
          <li className="text-3xl text-purple-600"><Link to="/nftdata">Nft Data File</Link></li>
          </ul>
          
          
          
          
          
          
          
          </div>

        </main>
      </div>
    </div>
  )
}

export default Menu