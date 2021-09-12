import React from 'react'

const Modal = ({currentPhoto, onClose}) => {
    const {name, category, description, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img alt="current category" src={require(`../../assets/large/${category}/${index}.jpg`).default} />
          <p>
            {description}
          </p>
          <button type="button" onClick={onClose}>
            Close this modal
          </button>
        </div>
      </div>  
    )
}

export default Modal;