import React, { useState } from "react";
import Title from "../../components/Title/Title";
import "./CategoryModal.css";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateCategory: (name: string) => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({
  isOpen,
  onClose,
  onCreateCategory,
}) => {
  const [categoryName, setCategoryName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleCreateCategory = () => {
    onCreateCategory(categoryName);
    setCategoryName("");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalHeader">
          <Title text="New category" />
          <button onClick={onClose} className="btnRed">
            Close
          </button>
        </div>
        <input
          type="text"
          placeholder="New category name"
          value={categoryName}
          onChange={handleInputChange}
          className="input"
        />
        <button onClick={handleCreateCategory} className="btnGreen">
          Add
        </button>
      </div>
    </div>
  );
};

export default CategoryModal;
