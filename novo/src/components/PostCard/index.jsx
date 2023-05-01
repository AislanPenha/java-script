import './styles.css';
export const PostCard = ({post}) => {
    return (
        <div key={post.id} className="post">
            <div className="post-content">
                <img src={post.cover} alt={post.title} />
                <h2>{post.id} {post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
}