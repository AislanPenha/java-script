import './styles.css';

export const TextInput = ({searchValue, hadlerChange}) => {
    return (
        <input 
        className='text-input'
        type='search' 
        value={searchValue} 
        onChange={hadlerChange}
        placeholder='Type your search'
        />
    );

    
}