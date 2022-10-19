import { Box_post } from '../../components/items/Box_post'
import { Create_ilha } from '../create/Create_ilha';
import { Menu } from '../menu/Menu';
import '../../assets/css/posts.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../../firebase'


export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const fetchei = useRef(false);

    const fetchPosts = async () => {
        const { data } = await axios.get('http://localhost:3000/post')
        setPosts(data)
        console.log(data)
    }

    const fecthFirebase = async() => {
        const temp = []
        onSnapshot(query(collection(db, 'posts')), (querySnapshot) => {
            querySnapshot.docs.map((doc) => {
                temp.push({
                    data: doc.data()['data'],
                    descritivo: doc.data()['descritivo'],
                    titulo: doc.data()['titulo'],
                    foto: doc.data()['foto']
                })
            })
        })
        setPosts(temp)
    }


    useEffect(() => {
        onSnapshot(query(collection(db, 'posts')), (querySnapshot) => {
            const temp = []
            querySnapshot.docs.map((doc) => {
                temp.push({
                    data: doc.data()['data'],
                    descritivo: doc.data()['descritivo'],
                    titulo: doc.data()['titulo'],
                    foto: doc.data()['foto'],
                    nome: doc.data()['name']
                })
            })
            setPosts(temp)
        })
    }, [])

    return (
        <div className="Posts">
            <div className='Posts-intems'>
                <div className='feed-post'>
                    <Create_ilha/>
                    <div className='fack-div'></div>
                    <br /><br />
                    {
                        posts.length > 0
                        ?
                        posts.map((item) => 
                           <Box_post discritivo={item.descritivo} date={item.data} name={item.nome} foto={item.foto}/>
                        )
                        :
                        <p>vc corno</p>
                    }   
                    <div className='fack-div</div>'></div>       
                </div>
            </div>
            <Menu/>
        </div>
    )
}