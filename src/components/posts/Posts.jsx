import { Box_post } from '../../components/items/Box_post'
import { Barra_post } from '../../components/items/Barra_post'
import { Notificantion_post } from '../items/Notificantion_post'
import '../../assets/css/posts.css'

export const Posts = () => {
    return (
        <div className="Posts">
            <div className='Posts-intems'>
                <div className='feed-post'>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Box_post/>
                    <div className='fack-div'></div>
                    <Barra_post/>
                </div>
                <div className='notificantion-post'>
                    <Notificantion_post/>
                    <div className='fack-div'></div>
                    <Notificantion_post/>
                    <div className='fack-div'></div>
                    <Notificantion_post/>
                    <div className='fack-div'></div>
                    <Notificantion_post/>
                    <div className='fack-div'></div>
                    <Notificantion_post/>
                    <div className='fack-div'></div>
                    <Notificantion_post/>
                    <div className='fack-div'></div>
                    
                </div>
            </div>
        </div>
    )
}