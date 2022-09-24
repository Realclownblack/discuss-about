import { Box_post } from '../../components/items/Box_post'
import { Create_ilha } from '../create/Create_ilha';
import { Menu } from '../menu/Menu';
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
                    <Create_ilha/>
                    <div className='fack-div'></div>
                    <Box_post />
                    <div className='fack-div'></div>
                    <Box_post />
                    <div className='fack-div'></div>
                    <Box_post />
                    <div className='fack-div'></div>
                    <Box_post />
                    <div className='fack-div'></div>
                    {/* {posts.map((post) => <Box_post category={post.category} title={post.title} contect={post.content} />)} */}
                </div>
            </div>
            <Menu/>
        </div>
    )
}