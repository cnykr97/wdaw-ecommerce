import './css/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-3 contact">
                        <p className='mb-4'>&copy; Copyright 2022. <br /> All rights reserved.</p>
                        <address >
                            <nav className="navbar navbar-expand-md">
                                <button className="navbar-toggler p-0 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#footer-contact" aria-controls="footer-contact" aria-expanded="false" aria-label="Toggle navigation">
                                    CONTACT <i className="fa-solid fa-caret-down" id='contact-caret'></i>
                                </button>
                                <div className="collapse navbar-collapse " id="footer-contact">
                                    <div className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column">
                                        <h4 className='d-none d-md-block'>CONTANCT</h4>
                                        <p className="nav-item">Gülbahçe Mahallesi: <br />
                                            Gülbahçe Caddesi, 14683 Sokak <br />
                                            Urla, İzmir</p>
                                        <p><a href="mailto:'wdawdevelopment@gmail.com'"><i class="fa-solid fa-envelope"></i> wdawdevelopment@gmail.com</a></p>
                                        <p><a href="tel:+9005494569186"><i class="fa-solid fa-phone"></i> +90 549 456 91 86</a></p>
                                    </div>
                                </div>
                            </nav>
                        </address>
                    </div>
                    <div className="col-12 col-md-3 categories ">
                        <nav className="navbar navbar-expand-md">
                            <button className="navbar-toggler p-0 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#footer-categories" aria-controls="footer-categories" aria-expanded="false" aria-label="Toggle navigation">
                                CATEGORIES <i className="fa-solid fa-caret-down" id='contact-caret'></i>
                            </button>
                            <div className="collapse navbar-collapse footer-column" id="footer-categories">
                                <h4 className='d-none d-md-block'>CATEGORIES</h4>
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
                        </nav>
                    </div>
                    <div className="col-12 col-md-3 about">
                        <nav className="navbar navbar-expand-md">
                            <button className="navbar-toggler p-0 mb-2 mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#footer-about" aria-controls="footer-about" aria-expanded="false" aria-label="Toggle navigation">
                                ABOUT <i className="fa-solid fa-caret-down" id='contact-caret'></i>
                            </button>
                            <div className="collapse navbar-collapse footer-column" id="footer-about">
                                <h4 className='d-none d-md-block'>ABOUT</h4>
                                <ul>
                                    <li className='nav-item'>
                                        <a className='nav-link'>About Us</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link'>Delivery</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link'>Testimonials</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-12 col-md-3 social-links">
                        <div className="row ">
                            <div className="col-1">
                                <a target="_blank" href='https://www.facebook.com'><i class="fa-brands fa-facebook-f fa-lg"></i></a>
                            </div>
                            <div className="col-1">
                                <a target="_" href='https://www.instagram.com'><i class="fa-brands fa-instagram fa-lg"></i></a>
                            </div>
                            <div className="col-1">
                                <a target="_" href='https://www.twitter.com'><i class="fa-brands fa-twitter fa-lg"></i></a>
                            </div>
                            <div className="col-1">
                                <a target="_" href='https://www.linkedin.com'><i class="fa-brands fa-linkedin fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;