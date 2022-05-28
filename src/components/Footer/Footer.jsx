import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import pic1 from '../../assets/pic5.png'
import pic2 from '../../assets/pic6.png'
import pic3 from '../../assets/pic3.png'


function Footer() {
    return (
        <footer className="Footer">
            <div className="grid grid-cols-2 gap-0 px-0 md:grid-cols-4 gap-">
                <div>
                    <h2 className="mb-6 text-sm  text-gray-900 uppercase font-bold">Menu</h2>
                    <ul className="">
                        <li className="pl-0">
                            <Link to="/" className=" hover:underline">Marketplace</Link>
                        </li>
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">My account</Link>
                        </li>
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">Al drawing tools</Link>
                        </li>
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">NFT printing Service</Link>
                        </li>
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">About us</Link>
                        </li>
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">Blog</Link>
                        </li>
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">F.A.Q</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Social</h2>
                    <ul className="">
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">Twitter</Link>
                        </li>
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">Discord</Link>
                        </li>
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">Instagram
                            </Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Legal</h2>
                    <ul className="">
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">Terms & Conditions</Link>
                        </li>
                        <li className="pl-0">
                            <Link to="/" className="hover:underline">Privacy and Policy</Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Download</h2>
                    <ul className="flex justify-between flex-col">
                        <li className='flex space-x-4 pl-0'>

                            <span><img src={pic1} alt="" /></span><span><img src={pic2} alt="" /></span><span><img src={pic3} alt="" /></span>
                        </li>

                        <li  className='flex space-x-4 pl-0 '>
                            <p>@ 2020 OXO .ART</p>
                        </li>

                    </ul>
                </div>
            </div>
          

        </footer>

    )
}

export default Footer