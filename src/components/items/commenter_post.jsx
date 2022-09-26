import '../../assets/css/css-items/commenter_post.css'
import foto from '../../assets/img/perfil.png'

export const Commenter_post = (props) => {
    return (
    <div className='commenter-div-post'>
        <div className='commenters-post'>
        <div className='foto-perfil-user'><img className='foto-img' src={foto} alt="" /></div>
            <div className='text-commenter-post'>{props.commenter_users}</div>
        </div>
    </div>
  )
}
