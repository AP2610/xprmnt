// Components
import Link from 'next/link';
import NavDropdown from './NavDropdown';
import Button from '../../components/ui-elements/Button';

// Hooks
import { useState } from 'react';

export default function NavItem(props) {
    const [isHovered, setIsHovered] = useState(false);
    const { navItem, cartQuantity, className } = props;

    const handleNavItemHover = () => setIsHovered(!isHovered);
    // Add active navigation link logic on the anchor element

    return (
        <li className={className}>
            {navItem?.subNav?.length ? (
                <>
                    <Button 
                        className="btn-link btn-dropdown" 
                        type="button" 
                        aria-haspopup="menu" 
                        aria-expanded={isHovered}
                    >
                        {navItem.name}
                    </Button>
                    <NavDropdown onMouseEnter={handleNavItemHover} onMouseLeave={handleNavItemHover} subNav={navItem.subNav} />
                </>
            ) : (
                <Link href={navItem.url}>
                    <a className={navItem?.additionalLinkClasses && navItem.additionalLinkClasses}>{navItem.name} {navItem?.showNumberOfProducts && `(${cartQuantity})`}</a>
                </Link>
            )}
        </li>
    );
}
