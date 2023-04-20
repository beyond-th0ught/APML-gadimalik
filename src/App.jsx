import React from "react";

import Gaadi_Malik_Issue from "./components/GMI/Gaadi-Malik-Issue";
import New_Tyre_Issue from "./components/ControlRoom/NTI/New-Tyre-Issue";
import TopNavContextProvider from "./Context/TopNavContextProvider.jsx";
import LoadContextProvider from "./Context/LoadContextProvider";
import CountContextProvider from "./Context/CountContextProvider";

export default function App() {
  return (
    <TopNavContextProvider>
      <LoadContextProvider>
        <CountContextProvider>
          <Gaadi_Malik_Issue />
        </CountContextProvider>
      </LoadContextProvider>
    </TopNavContextProvider>
  );
}
