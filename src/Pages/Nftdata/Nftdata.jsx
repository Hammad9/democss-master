import React from 'react'


import pic0 from '../../assets/030.png'
import pic1 from '../../assets/48.png'
import pic2 from '../../assets/50.png'
import pic3 from '../../assets/59.png'
import Btn1 from '../../components/btn1'
import Btns from '../../components/btns'




function Nftdata() {


  return (



    <div >
      <main className='mx-14'>
        <div className=" main  pl-40 my-14">
           <div className="">
           <section >
              <h1 className='text-3xl'>NFT Data</h1>
                <div
                  className="container flex flex-col  mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row pb-10 "
                >
                
                  <div className="flex flex-col space-y-12 md:w-1/2 ">
                    <div className='border-2 border-black  mt-20 '>
                      <table className="w-1/2 text-sm text-left  ">
                        <thead className="text-xs  uppercase   ">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr className=" border-y-4 ">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                              Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                              Sliver
                            </td>
                            <td className="px-6 py-4">
                              Laptop
                            </td>
                            <td className="px-6 py-4">
                              $2999
                            </td>

                          </tr>
                          <tr className="bg-white border-b-4 ">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                              Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                              White
                            </td>
                            <td className="px-6 py-4">
                              Laptop PC
                            </td>
                            <td className="px-6 py-4">
                              $1999
                            </td>

                          </tr>
                          <tr className="bg-white ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                              Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                              Black
                            </td>
                            <td className="px-6 py-4">
                              Accessories
                            </td>
                            <td className="px-6 py-4">
                              $99
                            </td>

                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>

          
                  <div className="flex flex-col space-y-2 md:w-1/2 ml-32">
                    <div className='flex flex-col '>
                      <img src={require('../../assets/030.png')} alt="" />
                    </div>



                  </div>
                </div>
              </section>



            <div>
              <p className="text-3xl">
                How 0⨯0 .Art NFT Work?
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nulla enim facilis, illum fugiat earum beatae nesciunt deleniti, temporibus culpa libero eos itaque impedit debitis maiores placeat dicta quam tempore.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae deleniti placeat libero! Corrupti vitae dolore iste beatae, dignissimos deserunt dolorem laborum quas adipisci eos voluptatum, blanditiis provident molestiae esse exercitationem!</p>
            </div>
            <div>

              <div>
                <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">some 0⨯0 Art. NFT</h4>

                <div className="mt-8 grid lg:grid-cols-5 gap-10">
                  <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
                    <img src={pic0} alt="stew" className="h-32 sm:h-48 w-full object-cover" />
                    <div className="m-4">
                      <span className="font-bold">some 0⨯0 Art.</span>
                      <span className="block text-gray-500 text-sm">some 0⨯0 Art.</span>
                    </div>

                  </div>
                  <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
                    <img src={pic1} alt="stew" className="h-32 sm:h-48 w-full object-cover" />
                    <div className="m-4">
                      <span className="font-bold">some 0⨯0 Art.</span>
                      <span className="block text-gray-500 text-sm">some 0⨯0 Art.</span>
                    </div>

                  </div>
                  <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
                    <img src={pic2} alt="noodles" className="h-32 sm:h-48 w-full object-cover" />
                    <div className="m-4">
                      <span className="font-bold">some 0⨯0 Art.</span>
                      <span className="block text-gray-500 text-sm">some 0⨯0 Art.</span>
                    </div>

                  </div>
                  <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
                    <img src={pic3} alt="curry" className="h-32 sm:h-48 w-full object-cover" />
                    <div className="m-4">
                      <span className="font-bold">Tofu Curry</span>
                      <span className="block text-gray-500 text-sm">some 0⨯0 Art.</span>
                    </div>

                  </div>
                </div>

               

                <div className="mt-8">
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Nftdata