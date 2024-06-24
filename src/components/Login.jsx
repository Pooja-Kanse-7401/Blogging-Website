import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";


function Login() {

    const [openLogin, setOpenLogin] = useState(true);

    const closeLogin = () => {
        setOpenLogin(!openLogin)
        alert("working")

    }


    return (
        <>
            
        </>
    )
}

export default Login
