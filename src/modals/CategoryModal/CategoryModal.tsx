import React, { ChangeEvent, useState, FC } from "react";
import Title from "../../components/Title/Title";
import "./CategoryModal.css";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateCategory: (name: string) => void;
}

const CategoryModal: FC<CategoryModalProps> = ({
  onClose,
  onCreateCategory,
}) => {
  const [categoryName, setCategoryName] = useState("");

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

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
          onChange={onHandleChange}
          className="input"
        />
        <button
          onClick={() => onCreateCategory(categoryName)}
          className="btnGreen"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CategoryModal;
