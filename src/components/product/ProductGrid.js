// Components
import clsx from 'clsx';
import Product from './Product';

export default function ProductGrid(props) {
    const { products, children, className } = props;
    const productsGrid = products && products.map(product => {
        return <Product details={product} key={product.id} />
    })

    const classes = clsx('products-layout', className);

    return (
        <section className={classes}>
            {children}
            <div className="products-grid">
                {products && productsGrid}
            </div>
        </section>
    )
}