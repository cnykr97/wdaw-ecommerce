import ProductTile from "./ProductTile";

const TileListCreator = ({ products, section, getters, setters }) => {

    return (
        <div className="product-tiles row ">
            {products.map((product) => {
                if (section === 'popular-items') {
                    if (product.isPopular === true) {
                        return (
                            <div className="tile-wrapper col d-flex justify-content-center" key={product.id}>
                                <ProductTile product={product} getters={getters} setters={setters} />
                            </div>
                        )
                    }
                } else if (section === 'clp') {
                    return (
                        <div className="tile-wrapper col d-flex justify-content-center" key={product.id}>
                            <ProductTile product={product} getters={getters} setters={setters} />
                        </div>
                    )
                }
                return null
            })}
        </div>
    );
}

export default TileListCreator;