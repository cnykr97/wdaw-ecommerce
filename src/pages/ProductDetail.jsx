import { Box, Rating, Tab } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/productdetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(0)

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const handleThbClick = (id) => {
        if (id === 1) {
            document.getElementById('big-1').style.display = 'block';
            document.getElementById('big-2').style.display = 'none';
            document.getElementById('big-3').style.display = 'none';
        } else if (id === 2) {
            document.getElementById('big-1').style.display = 'none';
            document.getElementById('big-2').style.display = 'block';
            document.getElementById('big-3').style.display = 'none';
        } else {
            document.getElementById('big-1').style.display = 'none';
            document.getElementById('big-2').style.display = 'none';
            document.getElementById('big-3').style.display = 'block';
        }

    }

    return (
        <div className="container-fluid pdp">
            <div className="row ">
                <div className="col-12 col-lg-6 images">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 big-image">
                                <img id='big-1' src="/img/pdp/1 copy.jpg" alt="" />
                                <img id='big-2' src="/img/pdp/2 copy.jpg" alt="" />
                                <img id='big-3' src="/img/pdp/3 copy.jpg" alt="" />

                            </div>
                            <div className="col-12 thumbnails">
                                <img id='thb-1' src="/img/pdp/1 copy.jpg" alt=""
                                    onClick={() => { handleThbClick(1) }} />
                                <img id='thb-2' src="/img/pdp/2 copy.jpg" alt=""
                                    onClick={() => { handleThbClick(2) }} />
                                <img id='thb-3' src="/img/pdp/3 copy.jpg" alt=""
                                    onClick={() => { handleThbClick(3) }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 info">
                    <div className="container-fluid">
                        <div className="row">
                            <h1>{`Product ${id}`} <span className='discount'>%20 OFF</span></h1>
                            <button id='add-to-wishlist'><i className="fa-solid fa-heart"></i></button>
                            <Rating defaultValue={5} precision={0.5} ></Rating>
                            <span className='rating'>4.8 </span>
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
                            <div className="mt-3 add-to-cart">
                                <button onClick={handleDecreaseQuantity}><i className="fa-solid fa-minus"></i></button>
                                <span className='m-4'>{quantity}</span>

                                <button onClick={handleIncreaseQuantity}><i className="fa-solid fa-plus"></i></button>

                                <button id='add-to-cart'>ADD TO CART <i className="fa-solid fa-cart-shopping"></i></button>
                            </div>
                            <div className="mt-4 share">
                                <span>Share: </span>
                                <a className='text-muted' target="_blank" href="https://wwww.instagram.com"><i className="fa-brands fa-instagram"></i></a>
                                <a className='text-muted' target="_blank" href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a>
                                <a className='text-muted' target="_blank" href="https://wwww.facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
                                <a className='text-muted' target="_blank" href="https://www.pinterest.com"><i className="fa-brands fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetail;