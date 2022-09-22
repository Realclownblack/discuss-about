import '../../assets/css/login.css'
import '../../assets/css/stars.css'
import React, { useEffect} from "react";
import {useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import google from '../../assets/img/google.png'
import logo from '../../assets/img/logo.png'

export const Login = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
          return;
        }
        if (user) navigate("/home");
      }, [user, loading]);
    return (
      <div className='Login-div'>
        <div className='div-stars'>
          <div class="stars" ></div>
        </div>
        <div className="Login">
          <img className='logo_2' src={logo} alt="" />
            <button className="login__btn login__google" onClick={signInWithGoogle}>
              <img className='img-google' src={google} alt="" /> Login with Google
            </button>
        </div>       
      </div>

    )
}
