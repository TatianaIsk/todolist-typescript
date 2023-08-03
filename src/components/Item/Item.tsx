import { FC, useRef } from 'react';
import callapseIcon from './../../assets/callapse-icon.png';
import addSubset from './../../assets/add-subset.png';
import writeItem from './../../assets/write.png';
import deleteItem from './../../assets/delete.png';
import './Item.css';

interface ItemProps {
  title: string;
  checkbox?: boolean;
}

const Item: FC<ItemProps> = ({ title, checkbox }) => {
  const inputRef = useRef<HTMLInputElement[]>([]);
  const checkboxId = `checkbox-${title.replace(/ /g, '-')}`;

  return (
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
        <label className='itemTitle' htmlFor={checkboxId}>
          {title}
        </label>
      </div>
      <div className='line'></div>
      <img src={callapseIcon} alt='callapse' className='iconCallapse' />
      <img src={addSubset} alt='addSubset' className='icon' />
      <img src={writeItem} alt='writeItem' className='icon' />
      <img src={deleteItem} alt='deleteItem' className='icon' />
    </div>
  );
};

export default Item;
