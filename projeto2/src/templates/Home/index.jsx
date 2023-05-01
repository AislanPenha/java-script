const { Component } = require("react");

export class Home extends Component{
    state = {
        counter: 0
    };
    handlerImplements = () =>{
        this.setState((prev, prevP) =>{
            console.log('STATE', prev, 'PROPS', prevP.name);
            return {counter: prev.counter + 1};
        }, ()=> {
            console.log(this.state.counter);
        });
    }
    render(){
        
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handlerImplements}>Implements</button>
            </div>
        );

    }
}







// import { Component } from 'react';

// import './styles.css';

// import { loadPosts } from '../../utils/load-posts';
// import { Posts } from '../../components/Posts';
// import { Button } from '../../components/Button';
// import { TextInput } from '../../components/TextInput';

// export class Home extends Component{
//     state = {
//         posts: [],
//         allPosts: [],
//         page: 0,
//         postsPerPage: 3,
//         searchValue: ''
//     }

//     componentDidMount(){
//         this.loadPosts();
//     }

//     loadPosts = async () =>{
//         const postsJson = await loadPosts();
//         const {page, postsPerPage} = this.state;
//         this.setState({
//             posts: postsJson.slice(page, postsPerPage),
//             allPosts: postsJson,
//         });
//     }
//     loadMorePosts = ()=>{
//         const {page, postsPerPage, posts, allPosts} = this.state;
//         const nextPage = page + postsPerPage;
        
//         const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//         posts.push(...nextPosts);

//         this.setState({posts, page: nextPage});
        
//     }
//     hadlerChange = (e) =>{
//         const {value} = e.target;
//         this.setState({searchValue: value});
//         const {posts} = this.state;

       
//     }
//     render(){
//         const {posts, postsPerPage, page, allPosts, searchValue} = this.state;
//         const noMorePosts = (page + postsPerPage) >= allPosts.length;
//         const filteredPosts = !!searchValue ? 
//         allPosts.filter(post => {
//             return post.title.toLowerCase().includes(searchValue.toLowerCase());
//         })
//         : posts;
//         return (
//             <section className='container'>
//                 {!!searchValue &&
//                     <h1>Search value: {searchValue}</h1>
//                 }
//                 <TextInput 
//                     searchValue={searchValue}
//                     hadlerChange={this.hadlerChange}
//                 />
//                     {filteredPosts.length > 0 && (
//                         <Posts posts={filteredPosts}/>
//                         )
//                     }
//                     {filteredPosts.length === 0 && (
//                         <p>Não existem posts =(</p>
//                         )
//                     }
//                     <div className='button-container'>
//                         {!searchValue &&
//                             <Button 
//                                 disable={noMorePosts}
//                                 text="Load more posts"
//                                 onClick={this.loadMorePosts}
//                             />
//                         }
//                     </div>
//             </section>
//         );
//     }
// }
