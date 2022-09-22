import '../../assets/css/css-items/box_items.css'
import foto from '../../assets/img/perfil.png'
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
                    ...
                </div>
            </div>
            <div className='contect'>{props.contect}</div>
            <div className='barra-opcoes'>
                <button className='comment-button'>Comment</button>
            </div> 
        </div>
    )
}