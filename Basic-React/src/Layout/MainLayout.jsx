import React from "react";

import Navar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout=()=>{

    return( 
        <>
        <Navar/>
        <Sidebar/>
        <Outlet/>
        </>
    )
}

export default MainLayout;

