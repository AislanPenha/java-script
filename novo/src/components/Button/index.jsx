import './styles.css';

export const Button = ({loadPostMore, text, morePosts}) => {
    return (
        <button 
        className='button'
        onClick={loadPostMore} 
        disabled={morePosts}>
            {text}
        </button>
    );
}