import React, { ChangeEvent, useState, FC } from 'react';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import './CategoryModal.css';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateCategory: (name: string) => void;
}

const CategoryModal: FC<CategoryModalProps> = ({ onClose, onCreateCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  return (
    <div className='modal'>
      <div className='modalContent'>
        <div className='modalHeader'>
          <Title text='New category' />
          <Button onClick={onClose} className='btnRed'>
            Close
          </Button>
        </div>
        <input type='text' placeholder='New category name' value={categoryName} onChange={onHandleChange} className='input' />
        <Button onClick={() => onCreateCategory(categoryName)} className='btnGreen'>
          Add
        </Button>
      </div>
    </div>
  );
};

export default CategoryModal;
