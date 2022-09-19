import { Header } from "../components/header/Header"
import { Feeds } from "../components/feeds/Feeds"
import { Posts } from "../components/posts/Posts"
export const Home = () => {

    return (
        <div>
            <Header/>
            <Feeds/>
            <Posts/>

        </div>
    )
}