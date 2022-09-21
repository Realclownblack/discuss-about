import '../../assets/css/feeds.css'
import foto_perfil from '../../assets/img/perfil.png'
export const Feeds = () => {

    return (
        <div className="Feeds">
            <div className='Feeds-intems'>
                <div className='Feeds-perfil'>
                    <img className='foto-perfil' src={foto_perfil} alt="" />
                    <div className='inform-perfil'>
                        <p> Danilo william</p>                        
                    </div>

                </div>
                <div className='Feeds-Category'>

                </div>
            </div>
        </div>
    )
}