import React, { useState } from "react";

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
      <div className="modal-content">
        <h2>Create Category</h2>
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateCategory}>Create</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CategoryModal;
