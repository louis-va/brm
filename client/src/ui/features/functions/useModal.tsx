import { useState } from "react";

export const useModal = () => {
    const [showModal, setShowModal] = useState(false);
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    const openModal = () => {
      setShowModal(true);
    };
  
    return {
      showModal,
      closeModal,
      openModal
    };
  };