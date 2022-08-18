import './css/header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const dropdownMenuHandleClick = (menuID, caretID) => {
        const dropdownMenu = document.getElementById(menuID);
        const caret = document.getElementById(caretID);
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
            caret.classList.remove('fa-caret-up');
            caret.classList.add('fa-caret-down');
        } else {
            dropdownMenu.style.display = 'block';
            caret.classList.remove('fa-caret-down');
            caret.classList.add('fa-caret-up');
        }
    }

    return (
        <div className="header sticky-top">
            <nav className="navbar navbar-expand-md ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <Link to="/" className="navbar-brand p-1"><img src="img/wdaw-logo.png" alt="" /></Link>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item services">
                                <a className="nav-link " onClick={() => {
                                    dropdownMenuHandleClick('services-dropdown', 'services-caret');
                                }}>SERVICES <i className="fa-solid fa-caret-down" id='services-caret'></i></a>
                                <div id="services-dropdown">
                                    <ul>
                                        <li className='nav-item'>
                                            <a className='nav-link' onClick={() => {
                                                dropdownMenuHandleClick('pc-dropdown', 'pc-caret');
                                            }}>PRODUCT CATEGORIES <i className="fa-solid fa-caret-down" id='pc-caret'></i></a>
                                            <div id="pc-dropdown">
                                                <ul>
                                                    <li className='nav-item'>
                                                        <a className='nav-link'>Accessories</a>
                                                    </li>
                                                    <li className='nav-item'>
                                                        <a className='nav-link'>Drink</a>
                                                    </li>
                                                    <li className='nav-item'>
                                                        <a className='nav-link'>Home</a>
                                                    </li>
                                                    <li className='nav-item'>
                                                        <a className='nav-link'>Office</a>
                                                    </li>
                                                    <li className='nav-item'>
                                                        <a className='nav-link'>Books</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='nav-item '>
                                            <hr className='m-1' />
                                        </li>
                                        <li className='nav-item pb-1'>
                                            <a className='nav-link' onClick={() => {
                                                dropdownMenuHandleClick('sales-dropdown', 'sales-caret');
                                            }}>SALES<i className="fa-solid fa-caret-down" id='sales-caret'></i></a>
                                            <div id="sales-dropdown">
                                                <ul>
                                                    <li className='nav-item'>
                                                        <a className='nav-link'>Accessories</a>
                                                    </li>
                                                    <li className='nav-item'>
                                                        <a className='nav-link'>Drink</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" >COMPANY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >LIBRARY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled dropdown-toggle" tabIndex="-1" aria-disabled="true">EN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled dropdown-toggle" tabIndex="-1" aria-disabled="true">US$</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-icons d-none d-md-block">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item search" onClick={
                                () => {
                                    let dropdownMenu = document.getElementById('search-dropdown');
                                    if (dropdownMenu.style.display === 'block') {
                                        dropdownMenu.style.display = 'none';
                                    } else {
                                        dropdownMenu.style.display = 'block';
                                    }
                                }
                            }>
                                <a className="nav-link" ><i className="fa-regular fa-search fa-xl"></i></a>
                            </li>
                            <div id="search-dropdown">
                                <h6>Search in Wdaw-Ecommerce</h6>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" aria-label="Search"></input>
                                    <button className="btn " type="submit">Search</button>
                                </form>
                            </div>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-regular fa-user fa-xl"></i></a>
                            </li>
                            <li className="nav-item wishlist" onMouseMove={
                                () => {
                                    const wishlistIcon = document.getElementById('wishlist-icon');
                                    wishlistIcon.classList.add('fa-beat');
                                }
                            }
                                onMouseOut={
                                    () => {
                                        const wishlistIcon = document.getElementById('wishlist-icon');
                                        wishlistIcon.classList.remove('fa-beat');
                                    }
                                }>
                                <a className="nav-link"><i className="fa-regular fa-heart  fa-xl" id='wishlist-icon'></i></a>
                                <div id="wishlist-quantity">3</div>
                            </li>
                            <li className="nav-item shopping-cart"
                                onMouseMove={
                                    () => {
                                        const shoppingCartIcon = document.getElementById('shopping-cart');
                                        shoppingCartIcon.classList.add('fa-bounce');
                                    }
                                }
                                onMouseOut={
                                    () => {
                                        const shoppingCartIcon = document.getElementById('shopping-cart');
                                        shoppingCartIcon.classList.remove('fa-bounce');
                                    }
                                }>
                                <a className="nav-link" ><i className="fa-regular fa-shopping-cart fa-xl" id='shopping-cart'></i></a>
                                <div id="shopping-cart-quantity">2</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;