import logo from '../../assets/img/logo.png'
import { logout } from "../../firebase";
import '../../assets/css/header.css'
import React, { useEffect} from "react";
import {useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
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
                <button className='logout' onClick={logout}>Logout</button>
            </div>
        </div>
    )
}