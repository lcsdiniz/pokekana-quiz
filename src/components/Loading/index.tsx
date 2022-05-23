import { CgPokemon } from 'react-icons/cg';
import './styles.scss';

export function Loading() {
  return (
    <div className='loading-container animate__repeat-2'>
      <CgPokemon className="loading-icon" size={80}/>
      Loading
    </div>   
  )
}