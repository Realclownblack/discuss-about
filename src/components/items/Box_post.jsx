import '../../assets/css/css-items/box_items.css'
import foto from '../../assets/img/perfil.png'
import pontos from '../../assets/img/mostrar-mais-botao-com-tres-pontos.png'
import { Commenter } from '../../components/items/Commenter'
import one_pice from '../../assets/img/onepice.jfif'
import { Commenter_post } from './commenter_post'


export const Box_post = (props) => {    
    return (
        <div className="Box">
            <div className='info-box'>
                <div className='info-perfil'>
                    <div className='foto-perfil'><img className='foto-img' src={props.foto} alt="" /></div>
                    <div className='info-name-date'>
                        <div>{props.name}</div>
                        <div>{props.date}</div>
                    </div>                     
                </div>
                <div>
                    <img className='tres-pontos' src={pontos} alt="" />
                </div>
            </div>
            <div className='contect'>{props.contect}
            <div className='text-post'>{props.discritivo}</div>
            <div className='img-post'><img className='img-postada' src={one_pice} alt="" /></div>
            </div>
            <hr className='hr-box' />
            <div className='barra-opcoes'>
                <a id="ver-mais" class="commenter-ver" href="/contact">Ver mais</a>
                <div className='commenter-box-1'>
                    <Commenter_post commenter_users={'amo one pice amo luffy otimo personagem'}/>
                    <div className='fack-div'></div>
                </div>
                <div className='commenter-box-2'>
                    <div className='foto-perfil-user'><img className='foto-img' src={foto} alt="" /></div>
                    <div className='Commenter-box'>
                        <Commenter/>
                    </div> 
                </div>
     
            </div> 
        </div>
    )
}