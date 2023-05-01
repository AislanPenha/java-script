import { useCallback, useEffect, useState } from "react";
import './styles.css';
import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";

export function Home(){
   
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(50);
    const [searchValue, setSearchValue] = useState('');

    const morePosts = (page + postsPerPage >= allPosts.length);
    const filteredPosts = (!!searchValue) ? allPosts.filter( (post)=>{
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts ;

    const handleLoadPost = useCallback(async (page, postsPerPage) => {
        const postsAndPhotos = await loadPosts();

        setPosts(postsAndPhotos.slice(page, postsPerPage));
        setAllPosts(postsAndPhotos);
    },[]);

    const loadPostMore = () =>{
        const nextPage = page + postsPerPage;

        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        setPosts(posts);
        setPage(nextPage);
    }

    const changePosts = (e) => {
   
        setSearchValue(e.target.value);
    } 
    
    useEffect(() => {
        handleLoadPost(0, postsPerPage);
    },[handleLoadPost, postsPerPage])
    
    return(
        <section className="container">
            {!!searchValue && <h1>Search value: {searchValue}</h1>}
            <InputText 
            onChange={changePosts} 
            value={searchValue} />
        
            <Posts posts = {filteredPosts} />
            {!searchValue && 
                <Button loadPostMore={loadPostMore} morePosts={morePosts} text='Load post More' />
            }
            
        </section>
    );        
}