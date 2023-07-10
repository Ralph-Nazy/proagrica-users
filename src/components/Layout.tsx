import React from "react";
import {  Header, Footer}  from "."; 

interface Props {
    children?: any
  }

const Layout: React.FC<Props> = ({ children}) => {

    return(
        <>
        <Header />
            {children}
            <Footer />
        </>
    )
}
export default Layout;