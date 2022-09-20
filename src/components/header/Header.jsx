import logo from '../../assets/img/logo.png'
import '../../assets/css/header.css'
export const Header = () => {
    return (
        <div className="Header">
            <div className='Header-intems'>
                <img className='logo-img' src={logo} alt="" />
            </div>
        </div>
    )
}