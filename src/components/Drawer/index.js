import React from "react";
import "./index.css";
import { ImCross } from "react-icons/im";
import { MaskIcon } from "../../assets/svgs/mask";
import { WalletIcon } from "../../assets/svgs/wallet_connect";
import { TrustWallet } from "../../assets/svgs/trust_wallet";

const MainDrawer = (props) => {
  return (
    <>
      <div className={`MainDrawer ${!props.open ? "closed" : ""}`}>
        <div className="head">
          <button
            className="close"
            onClick={() => props.setDrawertoggle(false)}
          >
            <ImCross style={{ color: "black" }} />
          </button>

          <p style={{fontSize: '16px'}}>Connect your wallet</p>

          <p style={{color:'#828282'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum,
            blandit nulla cursus aliquet feugiat.
          </p>

          <div className="Options">
              <div className="singleOptions">
                  <MaskIcon/>  <p>Metamask</p> 
              </div>
              <div className="singleOptions">
                  <WalletIcon/>  <p>WalletConnect</p> 
              </div>
              <div className="singleOptions">
                  <TrustWallet/>  <p>Trustwallet</p> 
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDrawer;
