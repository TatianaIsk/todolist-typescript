import { FC } from "react";
import callapseIcon from "./../../assets/callapse-icon.png";
import addSubset from "./../../assets/add-subset.png";
import writeItem from "./../../assets/write.png";
import deleteItem from "./../../assets/delete.png";
import "./Category.css";

interface CategoryProps {
  title: string;
  checkbox?: boolean;
}

const Category: FC<CategoryProps> = ({ title, checkbox }) => {
  return (
    <div className="categoryItem">
      <div className="checkboxItem">
        <input
          type="checkbox"
          className="checkbox"
          checked={checkbox}
          id="categoryCheckbox"
        />
        <label className="categoryTitle" htmlFor="categoryCheckbox">
          {title}
        </label>
      </div>
      <div className="line"></div>
      <img src={callapseIcon} alt="callapse" className="iconCallapse" />
      <img src={addSubset} alt="addSubset" className="icon" />
      <img src={writeItem} alt="writeItem" className="icon" />
      <img src={deleteItem} alt="deleteItem" className="icon" />
    </div>
  );
};

export default Category;
