import React, { useState } from "react";
import ImageData from "./images";
import "./styles.css";

const Modal = ({ src, showModal, setShowModal }) => {
  return (
    showModal && (
      <div className="modal" onClick={() => setShowModal(false)}>
        <img src={src} alt="Full size image" className="modal-content" />
      </div>
    )
  );
};

export const MainComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  return (
    <>
      <div className="image-gallery">
        {ImageData.map((src, index) => (
          <div className="image-box" key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
            <div className="overlay">
              <div className="details">
                <h3 className="title">
                  <div style={{cursor:'pointer'}} onClick={(e) => {
                    e.preventDefault();
                    setModalSrc(src);
                    setShowModal(true);
                  }}>
                    Click Icon to see <br/>
                    the complete Image
                  </div>
                </h3>
                <span className="category">
                  <div style={{cursor:'pointer'}}> 
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16" 
                        onClick={(e) => {
                            e.preventDefault();
                            setModalSrc(src);
                            setShowModal(true);
                        }}
                        >
                        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                    </svg>
                  </div>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal src={modalSrc} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};


export default MainComponent;