import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ConnectWallet from "./Pages/ConnectWallet/ConnectWallet.jsx";
import AllDrawingTools from "./Pages/AllDrawings/AllDrawingTools";

import Listnftstep2 from "./Pages/Listnftstep2/Listnftstep2";
import Listnftstep3 from "./Pages/Listnftstep3/Listnftstep3";
import Pooldata from "./Pages/Pooldata/Pooldata";
import Nftdata from "./Pages/Nftdata/Nftdata";
import Menu from "./Pages/Menu";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar.jsx";
import MainDrawer from "./components/Drawer/index.js";

function App() {
  const [open, setOpen] = useState({ drawerOpen: false })
  const setDrawerOpen = (isDrawerOpen) => {
    setOpen({
      drawerOpen: isDrawerOpen
    })
  }

  const toggleDrawer = () => {
    setOpen((pstate) => ({ drawerOpen: !pstate.drawerOpen }))
  }

  return (
    <>
      <BrowserRouter>
        <Navbar toggleDrawer={toggleDrawer}/>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />
          <Route path="/alldrawingtools" element={<AllDrawingTools />} />
          <Route path="/listnftstep2" element={<Listnftstep2 />} />
          <Route path="/listnftstep3" element={<Listnftstep3 />} />
          <Route path="/pooldata" element={<Pooldata />} />
          <Route path="/nftdata" element={<Nftdata />} />
        </Routes>
        <Footer />
        <MainDrawer open={open.drawerOpen} setDrawertoggle={setDrawerOpen} />
      </BrowserRouter>
    </>
  );
}

export default App;
