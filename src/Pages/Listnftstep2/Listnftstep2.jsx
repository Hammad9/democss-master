import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import back from '../../assets/Button_link.png'
import pic0 from '../../assets/pic10.png'
import pic1 from '../../assets/pic11.png'
import pic2 from '../../assets/pic12.png'
import Checkbox from '../../components/checkbox'
import UploadFile from '../../components/uploadFile'
import Inputcomp from '../../components/inputcomp'
import Textarea from '../../components/textarea'
import Btn1 from '../../components/btn1'
import Select from '../../components/select'

function Listnftstep2() {
    return (
        <div>
            <main className="m-auto mx-32">
                <div className='mx-60 my-16'>

                    <h1 className=' text-3xl mb-6'>Mint from Contract</h1>
                    <a href=""><img src={back} alt="" /></a>
                    <div>
                        <span>  <Btn1 /></span>
                        <span>  <Btn1 /></span>
                        <span>  <Btn1 /></span>





                    </div>
                    <div className="text-sm">select contract</div>
                    <div>
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                    </div>
                    <div >
                        <h1 className='text-3xl'>About ArtWork</h1>
                        <Inputcomp title="Name" />
                    </div>
                    <Textarea />
                    <Inputcomp title="Tag" />
                    <div>
                        <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">

                            Art <span className='text-red-700 pl-2'>⨉</span>
                        </button>
                        <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">

                            Photography <span className='text-red-700 pl-2'>⨉</span>
                        </button>
                    </div>
                    <Select />
                    <Inputcomp title="Add link" />
                    <UploadFile />
                    <div className='flex flex-col my-4'>

                        <button className='px-8 py-3'>Sign Up</button>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Listnftstep2