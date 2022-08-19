import TileListCreator from '../components/TileListCreator';
import useFetch from '../useFetch';
import './css/home.css';


const Home = () => {

    const { data: products, isPending, error } = useFetch("http://localhost:8000/products");

    return (
        <div className="home">
            <section className="container-fluid carousel-banner">
                <div className="row">
                    <div className="slider col-12 col-md-9">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="img/carousel-banner/1.jpg" className="d-block w-100" alt="work anywhere"></img>
                                    <div className="carousel-item-content">
                                        <h1>Be the best at your work</h1>
                                        <p>Improve your work performance and client experience with powerful and fast solutions that we will provide and specialized for you.</p>
                                        <button>WIEV ALL OUR PRODUCTS</button>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/carousel-banner/2.jpg" className="d-block w-100" alt="shopping"></img>
                                    <div className="carousel-item-content">
                                        <h1>Be the best at your work</h1>
                                        <p>Improve your work performance and client experience with powerful and fast solutions that we will provide and specialized for you.</p>
                                        <button>WIEV ALL OUR PRODUCTS</button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/carousel-banner/3.jpg" className="d-block w-100" alt="bridge wiev"></img>
                                    <div className="carousel-item-content">
                                        <h1>Be the best at your work</h1>
                                        <p>Improve your work performance and client experience with powerful and fast solutions that we will provide and specialized for you.</p>
                                        <button>WIEV ALL OUR PRODUCTS</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sales col-3 d-none d-md-flex flex-column">
                        <img src="img/sales.jpg" alt="sales" />
                        <div className="follow-sales mt-4 d-flex flex-column">
                            <p className='text-center'>Follow us on Instagram and be aware of the discounts!</p>
                            {/* eslint-disable-next-line */}
                            <a target="_blank" href='https://www.instagram.com'><button><i className="fa-brands fa-instagram fa-lg"></i> FOLLOW</button></a>

                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid popular-items">
                <div className="row">
                    <div className="col-12 popular-items-header">
                        <span>Popular Items</span>
                        <hr className='popular-items-header-hr' />
                    </div>

                    {error && <p>{error}</p>}
                    {isPending && <p><i className="fa-solid fa-spinner fa-spin-pulse fa-xl"></i></p>}
                    {products && <TileListCreator products={products} section='popular-items' />}

                </div>

            </section>

            <section className="static-banner">
                <img src="img/static-banner.png" alt="banner wdaw theme" className='w-100 d-block' />
                <div className="static-banner-content">
                    <h1>Banner Wdaw Theme</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero reprehenderit velit, ex a quos necessitatibus totam, autem quaerat </p>
                </div>
            </section>
        </div>

    );
}

export default Home;


/* <div className="col-12 col-md-6  col-xl-3 ">

                        </div>
                        <div className="d-none d-md-flex col-md-6  col-xl-3 ">

                        </div>
                        <div className="d-none d-md-flex col-md-6  col-xl-3 ">

                        </div>
                        <div className="d-none d-md-flex col-md-6  col-xl-3 ">

                        </div>
                        <div className="d-none d-xl-flex col-xl-3 ">

                        </div>
                        <div className="d-none d-xl-flex col-xl-3 ">

                        </div>
                        <div className="d-none d-xl-flex col-xl-3 ">

                        </div>
                        <div className="d-none d-xl-flex col-xl-3 ">

                        </div> */