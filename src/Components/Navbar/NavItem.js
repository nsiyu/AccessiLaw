import "./NavItem.css";
import { IoIosArrowDropdown } from 'react-icons/io';
const NavItem = (props) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Menu <IoIosArrowDropdown/></button>
      <div className="dropdown-content">
        <a href="#yourContentIdHere">About</a>
        <a href="#demo">Demo</a>
      </div>
    </div>
  );
};

export default NavItem;
