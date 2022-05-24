import { CgPokemon } from 'react-icons/cg';
import './styles.scss';

export function Loading() {
  return (
    <div className='loading-container'>
      <CgPokemon className="loading-icon animate__animated animate__infinite" size={80}/>
      Loading
    </div>   
  )
}