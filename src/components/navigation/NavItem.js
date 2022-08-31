// Components
import Link from 'next/link';
import NavDropdown from './NavDropdown';
import Button from '../../components/ui-elements/Button';

// Hooks
import { useState } from 'react';
import { useRouter } from 'next/router';

// Packages
import clsx from 'clsx';

export default function NavItem(props) {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter()
    const { navItem, cartQuantity, className } = props;
    const isActiveTab = router.pathname === navItem.url || router.asPath.includes(navItem.url);
    const listItemClasses = clsx(className, { 'active-tab': isActiveTab })
    
    const handleNavItemHover = () => setIsHovered(!isHovered);

    return (
        <li className={listItemClasses}>
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
                    <a className={navItem?.additionalLinkClasses}>{navItem.name} {navItem?.showNumberOfProducts && `(${cartQuantity})`}</a>
                </Link>
            )}
        </li>
    );
}
