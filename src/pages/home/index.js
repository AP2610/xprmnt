// Hooks

// Components
import Link from 'next/link';

/**
 * @function Home
 * @description The main component of this Application.
 * @returns {JSX} - The JSX for the component.
 */
export default function HomeIndex() {
    return (
        <section className="homepage">
            <div className="home-layout">
                <div>
                    <h1>Online shopping, simplified</h1>
                    <p>
                        Get the latest and greatest products from XPRMNT. From clothes, to electronics, find everything you need with our easy to use app.
                    </p>
                    <Link href="/products">
                        <a className="btn btn-default">Start shopping</a>
                    </Link>
                </div>
                <img src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg" className="rounded home-image" alt="" />
            </div>
        </section>
    );
}
