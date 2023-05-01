import { Component } from 'react';
import './styles.css';
import {loadPosts} from '../../utils/load-posts'
import { Posts } from '../../components/Posts';
import {Button} from '../../components/Button';

export class Home extends Component{

    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 3,
        searchValue: ''
    }

    async componentDidMount(){
        this.loadPosts();
    }

    loadPosts = async() =>{
        const { page, postsPerPage} = this.state;
        const postsAndPhotos = await loadPosts();
        this.setState({
            posts: postsAndPhotos.slice(page, postsPerPage),
            allPosts: postsAndPhotos,
        });
    }

    loadMorePosts = () =>{
        const {page, postsPerPage, posts, allPosts} = this.state;
        const nextPage = page + postsPerPage;
    
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        
        posts.push(...nextPosts);

        this.setState({posts: posts, page: nextPage});
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({searchValue: value});
    }
        
    render(){
        const {posts, page, postsPerPage, allPosts, searchValue} = this.state;
        const noMorePosts = (page + postsPerPage) >= allPosts.length;
        
        const filteredPosts = !!searchValue ?
            allPosts.filter(post => {
                return post.title.toLowerCase().includes(
                    searchValue.toLowerCase()
                );
            })
        :
        posts;

        return (
            <section className='container'>
                {!!searchValue && (
                    <h1>Search value: {searchValue}</h1>
                )}

                <input 
                value={searchValue}
                onChange={this.handleChange}
                type='search' />
                <br /><br />

                <Posts posts={filteredPosts} />

                {!searchValue && (
                    <Button 
                    disabled={noMorePosts}
                    text='Load more posts' 
                    onClick={this.loadMorePosts}/>
                )}
            </section>
        )
    }
}