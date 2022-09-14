import { Link } from 'react-router-dom';
import './css/product-tile.css';

const ProductTile = ({ product, getters, setters }) => {
    const sidebarID = "sidebar" + product.id;

    return (
        <div className="product-tile" >
            <img src={product.image} alt="Product" />
            <Link to={`/pdp/${product.id}`}><div className="info">
                <h5>{product.name}</h5>
                <p data-aos="fade-in" data-aos-offset="0">{product.info}</p>
                <div className='price' >{product.price}</div>
            </div></Link>
            <div id={sidebarID} className="sidebar" >
                <button className="add-to-cart sidebar-item"
                    onMouseOver={() => {
                        document.getElementById(sidebarID).style.zIndex = "-1";
                    }}
                    onMouseOut={() => {
                        document.getElementById(sidebarID).style.zIndex = "-2";
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        setters.setCartNumber(getters.cartNumber + 1)
                        fetch("http://localhost:8000/cart", {
                            method: 'POST',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(product)
                        })
                    }}
                >
                    <span>ADD TO CART</span>
                </button>
                <button className="add-to-wishlist sidebar-item"
                    onMouseOver={() => {
                        document.getElementById(sidebarID).style.zIndex = "-1";
                    }}
                    onMouseOut={() => {
                        document.getElementById(sidebarID).style.zIndex = "-2";
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        setters.setWishlistNumber(getters.wishlistNumber + 1)
                        console.log(getters.wishlistItems.length)
                        fetch("http://localhost:8000/wishlist", {
                            method: 'POST',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(product)
                        })
                    }}>
                    <span>ADD TO WISHLIST</span>
                </button>
                <button className="more-info sidebar-item"
                    onMouseOver={() => {
                        document.getElementById(sidebarID).style.zIndex = "-1";
                    }}
                    onMouseOut={() => {
                        document.getElementById(sidebarID).style.zIndex = "-2";
                    }}>
                    <span>MORE INFO</span>
                </button>
            </div>
        </div>
    );
}

export default ProductTile;