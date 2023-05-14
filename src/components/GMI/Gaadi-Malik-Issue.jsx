import React, { useContext, useEffect, useState, useRef } from "react";
import { animateScroll as scroll } from 'react-scroll';
// IMPORT FUNCTIONS
import { TopNavContext } from "../../Context/TopNavContextProvider";
import { LoadContext } from '../../Context/LoadContextProvider'
import Topnav from "../BaseComponents/Topnav";
import RtoPanel from "../RTO/RtoLoad";
import RtoEmpty from "../RTO/RtoEmpty";
import { CountContext } from "../../Context/CountContextProvider";
import AdvanceLoad from "../Advance/AdvanceLoad";
import AdvanceEmpty from "../Advance/AdvanceEmpty";
import UnloadingEmpty from "../Unloading/UnloadingEmpty";
import UnloadingLoad from "../Unloading/UnloadingLoad";
import LoadingLoad from "../Loading/LoadingLoad";
import LoadingEmty from "../Loading/LoadingEmty";
import ChalanLoad from "../Chalan/ChalanLoad";
import KhaliLoad from "../Khali/KhaliLoad";
import OtherIssueLoad from "../OtherIssue/OtherIssueLoad";
import RootLoad from "../Root/RootLoad";
import ChalanEmpty from "../Chalan/ChalanEmpty";
import KhaliEmpty from "../Khali/KhaliEmpty";
import OtherIssueEmty from "../OtherIssue/OtherIssueEmty";
import RootEmpty from "../Root/RootEmpty";

export default function Gaadi_Malik_Issue() {
  const scrollContainerRef = useRef(null);

  return (
    <div>
      <Topnav />
      <div className="flex flex-wrap gap-3 justify-center">
        
        {/* RTO */}
        {/* <div className="lg:flex md:grid-cols-1 gap-3"> */}
          <RtoPanel />
          <RtoEmpty />
        {/* </div> */}
        
        {/* एडवांस */}
        {/* <div className="lg:flex md:grid-cols-1 gap-3"> */}
          <AdvanceLoad />
          <AdvanceEmpty />
        {/* </div> */}

        {/* अनलोडिंग समस्या	*/}
        {/* <div className="lg:flex md:grid-cols-1 gap-3"> */}
          <UnloadingLoad/>
          <UnloadingEmpty/>
        {/* </div> */}

        {/* लोडिंग समस्या */}
        {/* <div className="lg:flex md:grid-cols-1 gap-3"> */}
          <LoadingLoad/>
          <LoadingEmty/>
        {/* </div> */}

        {/* रूट समस्या */}
        {/* <div className="lg:flex md:grid-cols-1 gap-3"> */}
          <RootLoad/>
          <RootEmpty/>
        {/* </div> */}

        {/* खाली */}
        {/* <div className="lg:flex md:grid-cols-1 gap-3"> */}
          <KhaliLoad/>
          <KhaliEmpty/>
        {/* </div> */}

        {/* बिल्टी,चलन */}
        {/* <div className="lg:flex md:grid-cols-1 gap-3"> */}
          <ChalanLoad/>
          <ChalanEmpty/>
        {/* </div> */}

        {/* Other issue */}
        {/* <div className="lg:flex md:grid-cols-1 gap-3"> */}
          <OtherIssueLoad/>
          <OtherIssueEmty/>
        {/* </div> */}
      </div>
    </div>
  );
}
