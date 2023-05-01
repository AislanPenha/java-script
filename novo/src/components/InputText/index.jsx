import './styles.css';

export const InputText = ({onChange, value}) => {
    return (
        <input type="search" 
        className='input'
        placeholder='Type your search'
        onChange={onChange} 
        value={value}/>
    );
}