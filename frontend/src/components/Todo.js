import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

    return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={openModal}>{props.button_text}</button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/> }
      { modalIsOpen && <Backdrop onClick={closeModal}/> }  
    </div>
    );
}

export default Todo;