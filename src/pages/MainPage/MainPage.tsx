import React, { useState } from "react";
import Title from "./../../../src/components/Title/Title";
import CategoryModal from "../../modals/CategoryModal/CategoryModal";
import "./MainPage.css";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateCategory = (name: string) => {
    console.log(`Создана категория: ${name}`);
    handleCloseModal();
  };

  return (
    <div className="container-main">
      <div className="header">
        <Title text="Username" />
        <button className="btn-delete">Delete list</button>
      </div>
      <button className="btn-category" onClick={handleOpenModal}>
        New category
      </button>
      {isModalOpen && (
        <div className="modal-overlay">
          <CategoryModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onCreateCategory={handleCreateCategory}
          />
        </div>
      )}
    </div>
  );
};

export default MainPage;
