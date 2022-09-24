import '../../assets/css/create_ilha.css'
import foto from '../../assets/img/perfil.png'
import { Create } from '../create/Create';
import { useState } from 'react'

export const Create_ilha = () => {
    const [visible, setVisible] = useState("Create-create")
    const [pressed, setPressed] = useState(false)


    const setMenuVisible = () => {
        pressed ? setVisible("Create-create" )  : setVisible("Create-create-abrir")
        setPressed(!pressed)
    }

    return (
        <div className='Create-ilha'>
            <div className='Create-ilha-div'>
                <div className='Create-ilha-box'>
                    <div className='Create-ilha-foto-perfil'>
                         <img className='foto-img' src={foto} alt="" />
                    </div>
                    <button className={'Chamar-create'} onClick={() => setMenuVisible()}>No que você esta pensando ?</button>
                </div>
                <hr className='hr-create' />
                <div className='Create-file'>
                </div>
            </div>
            <div className={'' + visible}>
                <Create />
            </div>
        </div>
    )
}