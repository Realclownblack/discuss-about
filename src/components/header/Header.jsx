import logo from '../../assets/img/logo.png'
import { useState } from 'react'
import { logout } from "../../firebase";
import '../../assets/css/header.css'
import React, { useEffect} from "react";
import {useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [visible, setVisible] = useState("abrir")
    const [pressed, setPressed] = useState(false)
    const setMenuVisible = () => {
        pressed ? setVisible("abrir") : setVisible("fechar")
        setPressed(!pressed)
    }
    useEffect(() => {
        if (loading) {
          return;
        }
        if (!user) navigate("/");
      }, [user, loading]);

    return (
        <div className="Header">
            <div className='Header-intems'>
                <img className='logo-img' src={logo} alt="" />
            </div>
            <div className='Header-button'>
                <button className='logout' onClick={() => logout()}>Logout</button>
            </div>
        </div>
    )
}