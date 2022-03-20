import { Modal } from "..";
import { Toggle } from "../../Toggle";

interface ConfigModalProps {
  isModalOpened: boolean;
  closeModal: () => void;
}

export function ConfigModal({ isModalOpened, closeModal }: ConfigModalProps) {
  if(!isModalOpened) {
    return null
  }
  
  return (
    <Modal id="config" closeModal={closeModal}>
      <div className="option">
        <p>Hard Mode</p>
        <Toggle />
      </div>
      <div className="option">
        <p>Comments</p>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/lcsdiniz/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/lcsdiniz" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
      <p className="version">Version 1.0</p>
    </Modal>
  )
}