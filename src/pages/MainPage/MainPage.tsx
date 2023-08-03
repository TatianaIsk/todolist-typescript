import React, { useState } from 'react';
import Title from './../../../src/components/Title/Title';
import CategoryModal from '../../modals/CategoryModal/CategoryModal';
import Category from '../../components/Category/Category';
import Button from '../../components/Button/Button';
import './MainPage.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);

  const handleCreateCategory = (name: string) => {
    console.log(`Создана категория: ${name}`);
    setCategories([...categories, name]);
    setIsModalOpen(false);
  };

  return (
    <div className='containerMain'>
      <div className='header'>
        <Title text='Username' />
        <Button className='btnRed'>Delete list</Button>
      </div>
      <Button className='btnCategory' onClick={() => setIsModalOpen(true)}>
        New category
      </Button>
      {isModalOpen && <CategoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreateCategory={handleCreateCategory} />}
      {categories.map((category, index) => (
        <Category key={index} title={category} />
      ))}
    </div>
  );
};

export default MainPage;
