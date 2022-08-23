// Hooks
import { useContext, useEffect, useState } from 'react';
import useFetch from '../../common/hooks/useFetch';

// Context
import { AppContext } from '../../common/context/AppContext';

// Components
import Link from 'next/link';
import NavItem from './NavItem';

// Other
import { navItems } from './navItems';

export default function Navbar() {
    const [navigationItems, setNavigationItems] = useState(navItems);
    const { numberOfProducts } = useContext(AppContext);
    const { request: getRequest } = useFetch('https://fakestoreapi.com/products');

    useEffect(() => {
        getRequest('/categories')
            .then(data => {
                const subNavData = data.map(dataItem => {
                    return { 
                        name: dataItem, 
                        url: `/${dataItem.replace(/\s/, '-').replace(/[,.']/g, '')}` 
                    }
                });

                const updatedNavigationItems = navigationItems.map(item => {
                    if (item.name.toLowerCase() === 'categories') {
                        return {
                            ...item,
                            subNav: subNavData
                        }
                    }
                    return item;
                });

                setNavigationItems(updatedNavigationItems)
            })
            .catch(error => console.log('Error fetching categories: ', error));
    }, []);

    const navigationLinks = navigationItems && navigationItems.map((item, index) => {
        return <NavItem key={index} navItem={item} cartQuantity={numberOfProducts} className="nav-item" />
    });

    return (
        <nav className="navbar">
            <Link href="/">
                <a className="nav-logo">XPRMNT</a>
            </Link>

            <ul className="nav-list">
                {navigationItems && navigationLinks}
            </ul>
        </nav>
    );
}
