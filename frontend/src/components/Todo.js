import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  
    return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={() => setModalIsOpen(true)}>{props.button_text}</button>
      </div>
      { modalIsOpen && <Modal setModalIsOpen={setModalIsOpen}/> }
      { modalIsOpen && <Backdrop onClick={closeModal}/> }  
    </div>
    );
}

export default Todo;