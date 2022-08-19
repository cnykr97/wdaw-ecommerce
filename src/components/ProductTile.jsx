import './css/product-tile.css';

const ProductTile = ({ product }) => {

    return (
        <div className="product-tile">
            <img src={product.image} alt="Product" />
            <div className="info">
                <h5>{product.name}</h5>
                <p>{product.info}</p>
                <div className='price'>{product.price}</div>
            </div>
            <div className="sidebar ">
                <button className="add-to-cart">
                    <span>ADD TO CART</span>
                </button>
                <button className="add-to-wishlist">
                    <span>ADD TO WISHLIST</span>
                </button>
                <button className="more-info">
                    <span>MORE INFO</span>
                </button>
            </div>
        </div>
    );
}

export default ProductTile;