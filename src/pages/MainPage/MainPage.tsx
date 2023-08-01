import React, { useState } from "react";
import Title from "./../../../src/components/Title/Title";
import CategoryModal from "../../modals/CategoryModal/CategoryModal";
import "./MainPage.css";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
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
    <div className="containerMain">
      <div className="header">
        <Title text="Username" />
        <button className="btnRed">Delete list</button>
      </div>
      <button className="btnCategory" onClick={handleOpenModal}>
        New category
      </button>
      {isModalOpen && (
        <CategoryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onCreateCategory={handleCreateCategory}
        />
      )}
    </div>
  );
};

export default MainPage;
