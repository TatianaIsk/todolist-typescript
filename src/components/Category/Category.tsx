import { FC, useRef, useState, ChangeEvent } from 'react';
import callapseIcon from './../../assets/callapse-icon.png';
import addSubset from './../../assets/add-subset.png';
import writeItem from './../../assets/write.png';
import deleteItem from './../../assets/delete.png';
import './Category.css';
import ItemModal from '../../modals/ItemModal/ItemModal';
import Item from '../Item/Item';

interface CategoryProps {
  title: string;
}

const Category: FC<CategoryProps> = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<{ title: string; checked: boolean }[]>([]);
  const [categoryChecked, setCategoryChecked] = useState(false);

  const inputRef = useRef<HTMLInputElement[]>([]);
  const checkboxId = `checkbox-${title.replace(/ /g, '-')}`;

  const handleCreateItem = (name: string) => {
    console.log(`Создана категория: ${name}`);
    setItems([...items, { title: name, checked: false }]);
    setIsModalOpen(false);
  };

  const handleAllItemsCheckboxChange = (checked: boolean) => {
    setCategoryChecked(checked);
    setItems(items.map(item => ({ ...item, checked })));
  };

  const handleItemCheckboxChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const checked = e.target.checked;
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      checked: checked,
    };
    setItems(newItems);
    setCategoryChecked(newItems.every(item => item.checked));
  };

  return (
    <div>
      <div className='categoryItem'>
        <div className='checkboxItem'>
          <input
            type='checkbox'
            className='checkbox'
            id={checkboxId}
            checked={categoryChecked}
            onChange={e => handleAllItemsCheckboxChange(e.target.checked)}
            ref={el => el && inputRef.current.push(el)}
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
        <Item key={index} title={item.title} checked={item.checked} onChange={e => handleItemCheckboxChange(e, index)} />
      ))}
    </div>
  );
};

export default Category;
