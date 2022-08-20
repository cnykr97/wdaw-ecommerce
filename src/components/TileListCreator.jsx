import ProductTile from "./ProductTile";

const TileListCreator = ({ products, section }) => {

    return (
        <div className="product-tiles row ">
            {products.map((product) => {
                if (product.isPopular === true) {
                    return (
                        <div className="tile-wrapper col d-flex justify-content-center" key={product.id}>
                            <ProductTile product={product} />
                        </div>
                    )
                }
                return null
            })}
        </div>
    );
}

export default TileListCreator;