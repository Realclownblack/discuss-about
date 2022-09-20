import { Box_post } from '../../components/items/Box_post'
import { Barra_post } from '../../components/items/Barra_post'
import { Notificantion_post } from '../items/Notificantion_post'
import '../../assets/css/posts.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


export const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const { data } = await axios.get('http://localhost:3000/post')
        setPosts(data)
        console.log(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="Posts">
            <div className='Posts-intems'>
                <div className='feed-post'>
                    {posts.map((post) => <Box_post category={post.category} title={post.title} contect={post.content} />)}
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