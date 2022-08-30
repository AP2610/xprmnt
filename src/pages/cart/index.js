// Hooks
import { useContext } from 'react';

// Context
import { AppContext } from '../../common/context/AppContext';

export default function CartIndex() {
    const { cart, cartTotalValue } = useContext(AppContext);
    const cartHasItems = cart.length;

    const cartProductRows = cart.map((product) => {
        return (
            <tr key={product?.id}>
                <td>
                    <img width="30" height="30" alt={product?.title} src={product?.image} />
                    {product?.title}
                </td>
                <td>${product?.price.toFixed(2)}</td>
                <td>{product?.quantity}</td>
                <td>
                    <strong>${(product?.price * product?.quantity).toFixed(2)}</strong>
                </td>
            </tr>
        );
    });

    if (!cartHasItems) {
        return (
            <div className="cart-layout">
                <div>
                    <h1>Your Cart</h1>
                    <p>You have not added any product to your cart yet.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-layout">
            <div>
                <h1>Your Cart</h1>
                {!cartHasItems && <p>You have not added any product to your cart yet.</p>}
            </div>

            <table className="table table-cart">
                <thead>
                    <tr>
                        <th width="25%" className="th-product">
                            Product
                        </th>
                        <th width="20%">Unit price</th>
                        <th width="10%">Quantity</th>
                        <th width="25%">Total</th>
                    </tr>
                </thead>
                <tbody>{cartProductRows}</tbody>
                <tfoot>
                    <tr>
                        <th colSpan="2"></th>
                        <th className="cart-highlight">Total</th>
                        <th colSpan="3" className="cart-highlight">${cartTotalValue}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
