// Hooks
import { useContext, useEffect, useState } from 'react';
import useFetch from '../../common/hooks/useFetch';

// Context
import { AppContext } from '../../common/context/AppContext';

// Components
import Link from 'next/link';
import NavItem from './NavItem';
import Switch from '../ui-elements/Switch';

// Other
import { navItems } from './navItems';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
    const [navigationItems, setNavigationItems] = useState(navItems);
    const { numberOfProducts, handleThemeToggle, isDarkMode } = useContext(AppContext);
    const { request: getRequest } = useFetch('https://fakestoreapi.com/products');

    useEffect(() => {
        getRequest('/categories')
            .then(data => {
                const updatedNavigationItems = navigationItems.map(item => {
                    if (item.name.toLowerCase() === 'categories') {
                        return {
                            ...item,
                            subNav: data.map(dataItem => {
                                return { 
                                    name: dataItem, 
                                    url: `/${item.name.toLowerCase()}/${dataItem.replace(/\s/, '-').replace(/[,.']/g, '')}` 
                                }
                            })
                        }
                    }
                    return item;
                });

                setNavigationItems(updatedNavigationItems)
            })
            .catch(error => console.log('Error fetching categories: ', error));
    }, []);

    // useEffect(() => console.log('navigationItems: ', navigationItems), [navigationItems])

    const navigationLinks = navigationItems && navigationItems.map((item, index) => {
        return <NavItem key={index} navItem={item} cartQuantity={numberOfProducts} className="nav-item" />
    });

    const themeIcon = isDarkMode ? <FaSun /> : <FaMoon />;

    return (
        <nav className="navbar">
            <Link href="/">
                <a className="nav-logo fs-3">
                    <div>XPRMNT</div>
                    <div>XPRMNT</div>
                    <div>XPRMNT</div>
                </a>
            </Link>

            <div className="theme-toggle-container">
                <Switch checked={isDarkMode} onSwitchToggle={handleThemeToggle}>{themeIcon}</Switch>
            </div>

            <ul className="nav-list">
                {navigationItems && navigationLinks}
            </ul>
        </nav>
    );
}
