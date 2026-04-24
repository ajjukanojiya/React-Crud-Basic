import React from "react";

import Navar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout=({children})=>{

    return( 
        <>
        <Navar/>
        <Sidebar/>
        {children}
        </>
    )
}

export default MainLayout;

