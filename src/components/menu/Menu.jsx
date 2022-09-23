import '../../assets/css/Menu.css'
import { useState } from 'react'
import React, { useEffect} from "react";
import {useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { logout } from "../../firebase";


export const Menu = () => {
    const [visible, setVisible] = useState("")
    const [pressed, setPressed] = useState(false)
    const [createVisible, setCreateVisible] = useState('menu-aberto')
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
          return;
        }
        if (!user) navigate("/");
      }, [user, loading]);

    const setCreate = () => {
        createVisible ? setCreateVisible('menu-aberto') : setCreateVisible('menu-fechado')
    }

    const setMenuVisible = () => {
        pressed ? setVisible("") : setVisible("open")
        setPressed(!pressed)
    }

    return (
        <div>
            <ul class="menu">
                <li title="home"><a href="#" onClick={() => setMenuVisible()} class="menu-button home">menu</a></li>
                <li title="search"><a href="#" class="search">search</a></li>
                <li title="Criar"><a href="#" class="pencil">Criar</a></li>
                <li title="Perfil"><a href="#" class="active about">about</a></li>
                <li title="archive"><a href="#" class="archive">archive</a></li>
                <li title="Logout"><a href="#" class="fa fa-sign-out" aria-hidden="true"  onClick={() => logout()} >Logout</a></li>
            </ul>

            <ul class={"menu-bar " + visible}>
                <li><a href="#" onClick={() => setMenuVisible()}>Menu</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Perfil</a></li>
                <li><a href="#" >Criar</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#" onClick={() => logout()} >Logout</a></li>
            </ul>
        </div>

    )
}

