import '../../assets/css/create.css'
import foto from '../../assets/img/perfil.png'
import { useState } from 'react'

export const Create = (props) => {
    const [visible, setVisible] = useState("")
    const [pressed, setPressed] = useState(false)
    const setMenuVisible = () => {
        pressed ? setVisible("") : setVisible("fechar")
        setPressed(!pressed)
    }

    return (
        <div className={"Create-div"+ visible}>
            <div className='Create-barra'>
                <button className={"Button-Create-x"} onClick={() => setMenuVisible()}>x</button>
                <p id='criar'>Criar Publicação</p>
                <button id='Button-Create' >Publicar</button>
            </div>
            <hr className='hr-create' />
            <div className='Create-div-post'>
                <div className='Create-box'>
                    <div className='Create-info-perfil'>
                        <div className='Create-foto-perfil'><img className='Create-foto-img' src={foto} alt="" /></div>
                        <div>
                            <div>Danilo william</div>
                        </div>                     
                    </div>                    
                </div>
                <div className='Create-text'><textarea className='Create-text-post' placeholder='No que você está pensando?' name="" id="" cols="30" rows="10"></textarea></div>          
            </div>
            <hr className='hr-create' />
            <div className='Create-arquivos'>
                <div>
                    <button className='Create-img-button'><input  type="file" name="" id="" /></button>
                </div>
            </div>
        </div>
    )
}