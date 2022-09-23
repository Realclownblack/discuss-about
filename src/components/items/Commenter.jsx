import '../../assets/css/css-items/commenter.css'
import enviar from '../../assets/img/enviar.png'

export const Commenter = () => {
    return (
    <div className='commenter-div'>
      <form class="commenter-container">
        <input type="text" id="commenter-bar" placeholder="Comentar"/><a href="#">
        <img class="commenter-icon" src={enviar}/></a>
      </form>
    </div>
  )
}
