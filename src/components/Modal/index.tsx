import { ReactNode } from 'react';
import './styles.scss';

interface ModalProps {
  id: string;
  closeModal: () => void;
  children: ReactNode;
}

export function Modal({ id, closeModal, children }: ModalProps) {
  window.onclick = function(event) {
    var modal = document.getElementById(id);
    if (event.target === modal) {
      closeModal();
    }
  }

  return (
    <div id={id} className="modal" onClick={() => {
      id === 'help' && closeModal()
    }}>
      <div className='modal-content'>
        {children}
      </div>
    </div>   
  )
}