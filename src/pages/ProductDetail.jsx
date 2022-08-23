import { Rating } from '@mui/material';
import './css/productdetail.css';

const ProductDetail = () => {
    return (
        <div className="container-fluid pdp">
            <div className="row ">
                <div className="col-12 col-lg-6 images">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 big-image">
                                <img src="/img/pdp/1 copy.jpg" alt="" />
                            </div>
                            <div className="col-12 thumbnails">
                                <img src="/img/pdp/1 copy.jpg" alt="" />
                                <img src="/img/pdp/2 copy.jpg" alt="" />
                                <img src="/img/pdp/3 copy.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 info">
                    <div className="container-fluid">
                        <div className="row">
                            <h1>Product 1 <span className='discount'>%20 OFF</span></h1>
                            <Rating defaultValue={5} precision={0.5} ></Rating>
                            <span className='rating'>4.8</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias veniam, illum error eveniet iste sit suscipit eos tempora doloribus nemo unde, laboriosam quidem ipsam reiciendis voluptatibus facere quam quia accusamus</p>
                            <p className='inStock'>In Stock <span>(16 sold in the last 24 hours)</span></p>
                            <div className="colors">
                                <div>Color: <span className='color1'></span> <span className='color2'></span> <span className='color3'></span ><span className='color4'></span> <span className='color5'></span></div>
                            </div>
                            <ul className='mt-2'>
                                <span>Size:</span>
                                <li>XS</li>
                                <li>S</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                            </ul>
                            <h1 className='mt-2 price'>$39.99<span>$49.99</span></h1>
                            <div className="add-to-cart">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;