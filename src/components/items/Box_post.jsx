import '../../assets/css/css-items/box_items.css'
import foto from '../../assets/img/perfil.png'
import pontos from '../../assets/img/mostrar-mais-botao-com-tres-pontos.png'
import { Commenter } from '../../components/items/Commenter'
import one_pice from '../../assets/img/onepice.jfif'

export const Box_post = (props) => {
    return (
        <div className="Box">
            <div className='info-box'>
                <div className='info-perfil'>
                    <div className='foto-perfil'><img className='foto-img' src={foto} alt="" /></div>
                    <div>
                        <div>Danilo william</div>
                        <div>16:57 - 1 Set.</div>
                    </div>                     
                </div>
                <div>
                    <img className='tres-pontos' src={pontos} alt="" />
                </div>
            </div>
            <div className='contect'>{props.contect}
            <div className='text-post'>
            Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde 22 de julho de 1997,
            com os capítulos compilados e publicados em 103 volumes tankōbon pela editora Shueisha até agosto de 2022. One Piece conta as aventuras de Monkey D.</div>
            <div className='img-post'><img className='img-postada' src={one_pice} alt="" /></div>
            </div>
            <hr className='hr-box' />
            <div className='barra-opcoes'>
                <div className='foto-perfil-user'><img className='foto-img' src={foto} alt="" /></div>
                <div className='Commenter-box'>
                    <Commenter/>
                </div>
                
            </div> 
        </div>
    )
}