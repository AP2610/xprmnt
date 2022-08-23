import NavItem from './NavItem';

export default function NavDropdown(props) {
    const { subNav, onMouseLeave, onMouseEnter } = props;

    const subNavigationItems = subNav && subNav.map((subNavItem, index) => <NavItem key={index} navItem={subNavItem} className="sub-nav-item" />)

    return (
        <ul className="sub-nav-list" onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
            {subNavigationItems && subNavigationItems}
        </ul>
    )
}