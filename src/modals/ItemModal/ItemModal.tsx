import React, { ChangeEvent, useState, FC } from 'react';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import './ItemModal.css';

interface ItemModalProps {
  isOpen: boolean;
  categoryName: string;
  onClose: () => void;
  onCreateItem: (name: string) => void;
}

const ItemModal: FC<ItemModalProps> = ({ onClose, onCreateItem, categoryName }) => {
  const [itemName, setItemName] = useState('');

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };

  return (
    <div className='modalItem'>
      <div className='modalContent'>
        <div className='modalHeader'>
          <Title text='New item' />
          <Button onClick={onClose} className='btnRed'>
            Close
          </Button>
        </div>
        <p className='subtitleItem'>For the {categoryName}</p>
        <input type='text' placeholder='New item name' value={itemName} onChange={onHandleChange} className='input' />
        <Button onClick={() => onCreateItem(itemName)} className='btnGreen'>
          Add
        </Button>
      </div>
    </div>
  );
};

export default ItemModal;
