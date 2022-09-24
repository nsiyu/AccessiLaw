import './NavItem.css';

const NavItem = (props) => {
    return (
        <button className='nav-button'><a href='#yourContentIdHere' className='anchor-button'>{props.content}</a></button>
    )
}

export default NavItem;