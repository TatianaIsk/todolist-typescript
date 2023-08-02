import React, { useState } from "react";
import Title from "./../../../src/components/Title/Title";
import CategoryModal from "../../modals/CategoryModal/CategoryModal";
import "./MainPage.css";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateCategory = (name: string) => {
    console.log(`Создана категория: ${name}`);
    setIsModalOpen(false);
  };

  return (
    <div className="containerMain">
      <div className="header">
        <Title text="Username" />
        <button className="btnRed">Delete list</button>
      </div>
      <button className="btnCategory" onClick={() => setIsModalOpen(true)}>
        New category
      </button>
      {isModalOpen && (
        <CategoryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreateCategory={handleCreateCategory}
        />
      )}
    </div>
  );
};

export default MainPage;
