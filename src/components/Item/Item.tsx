import { FC, useRef, ChangeEvent } from 'react';
import writeItem from './../../assets/write.png';
import deleteItem from './../../assets/delete.png';
import './Item.css';

interface ItemProps {
  title: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Item: FC<ItemProps> = ({ title, checked, onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const checkboxId = `checkbox-${title.replace(/ /g, '-')}`;

  return (
    <div className='categoryItem'>
      <div className='checkboxItem'>
        <input type='checkbox' className='checkbox' checked={checked} id={checkboxId} ref={inputRef} onChange={onChange} />
        <label className='itemTitle' htmlFor={checkboxId}>
          {title}
        </label>
      </div>
      <div className='line'></div>
      <img src={writeItem} alt='writeItem' className='icon' />
      <img src={deleteItem} alt='deleteItem' className='icon' />
    </div>
  );
};

export default Item;
