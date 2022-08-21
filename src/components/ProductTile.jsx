import './css/product-tile.css';

const ProductTile = ({ product }) => {
    const sidebarID = "sidebar" + product.id;

    return (
        <div className="product-tile" >
            <img src={product.image} alt="Product" />
            <div className="info">
                <h5>{product.name}</h5>
                <p >{product.info}</p>
                <div className='price' >{product.price}</div>
            </div>
            <div id={sidebarID} className="sidebar" >
                <button className="add-to-cart sidebar-item"
                    onMouseOver={() => {
                        document.getElementById(sidebarID).style.zIndex = "-1";
                    }}
                    onMouseOut={() => {
                        document.getElementById(sidebarID).style.zIndex = "-2";
                    }}>
                    <span>ADD TO CART</span>
                </button>
                <button className="add-to-wishlist sidebar-item"
                    onMouseOver={() => {
                        document.getElementById(sidebarID).style.zIndex = "-1";
                    }}
                    onMouseOut={() => {
                        document.getElementById(sidebarID).style.zIndex = "-2";
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