function Modal(props) {

    return (
    <div className="modal">
        <a>Are you sure?</a>
        <button className="btn btn--alt" onClick={props.setModalIsOpen(false)}>Cancel</button>
        <button className="btn" onClick={props.setModalIsOpen(false)}>Confirm</button>
    </div>
    );
}

export default Modal;