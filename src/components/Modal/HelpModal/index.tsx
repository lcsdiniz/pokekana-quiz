import { Modal } from "..";

interface HelpModalProps {
  isModalOpened: boolean;
  closeModal: () => void;
}

export function HelpModal({ isModalOpened, closeModal }: HelpModalProps) {
  if(!isModalOpened) {
    return null
  }
  
  return (
    <Modal id="help" closeModal={closeModal}>
      <h1 className="modal-title">PokéKana Quiz is a game for training katakana reading with Pokémon.</h1>   
      <h2 className="modal-subtitle">Instructions:</h2>
      <ul>
        <li>Type â, î, û, ê, ô for the long vowels;</li>
        <li>The symbols '♂' and '♀' in both Nidoran's names are translated as "Osu" and "Mesu" respectively.</li>
      </ul>
    </Modal>
  )
}