import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../component/Login";
import Home from "../component/Home";


// export default function Navigation() {
//     return (
//         <>
        
//         <Routes>

//         <Route path="/" element={<Login/>}></Route>
        
//         </Routes>
        
//         </>
//     )
// }

class Navigation extends React.Component{
render(){
    return(
        <>
        <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />

        </Routes>
        </>
    )
}


}

export default Navigation