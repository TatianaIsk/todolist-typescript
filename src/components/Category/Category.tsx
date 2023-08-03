import { FC, useRef, useState } from 'react';
import callapseIcon from './../../assets/callapse-icon.png';
import addSubset from './../../assets/add-subset.png';
import writeItem from './../../assets/write.png';
import deleteItem from './../../assets/delete.png';
import './Category.css';
import ItemModal from '../../modals/ItemModal/ItemModal';
import Item from '../Item/Item';

interface CategoryProps {
  title: string;
  checkbox?: boolean;
}

const Category: FC<CategoryProps> = ({ title, checkbox }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement[]>([]);
  const checkboxId = `checkbox-${title.replace(/ /g, '-')}`;

  const handleCreateItem = (name: string) => {
    console.log(`Создана категория: ${name}`);
    setItems([...items, name]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='categoryItem'>
        <div className='checkboxItem'>
          <input
            type='checkbox'
            className='checkbox'
            checked={checkbox}
            id={checkboxId}
            ref={el => {
              if (el) inputRef.current.push(el);
            }}
          />
          <label className='categoryTitle' htmlFor={checkboxId}>
            {title}
          </label>
        </div>
        <div className='line'></div>
        <img src={callapseIcon} alt='callapse' className='iconCallapse' />
        <img src={addSubset} alt='addSubset' className='icon' onClick={() => setIsModalOpen(true)} />
        <img src={writeItem} alt='writeItem' className='icon' />
        <img src={deleteItem} alt='deleteItem' className='icon' />
      </div>
      {isModalOpen && <ItemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreateItem={handleCreateItem} categoryName={title} />}
      {items.map((item, index) => (
        <Item key={index} title={item} />
      ))}
    </div>
  );
};

export default Category;
