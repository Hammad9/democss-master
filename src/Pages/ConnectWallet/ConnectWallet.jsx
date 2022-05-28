import React from 'react'


import './ConnectWallet.css'

function ConnectWallet() {

  return (
    <div className="flex flex-col justify-between h-screen ConnectWallet">
      
        <div className="headingContainer">
          <h1 className="heading">
            Connect Your Wallet before Creating
          </h1>
          <div>
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-slate-900 hover:bg-fuchsia-700 mt-9">
              Connect wallet
            </button>
          </div>
        </div>
    </div>
  )
}

export default ConnectWallet