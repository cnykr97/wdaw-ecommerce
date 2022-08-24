import TileListCreator from '../components/TileListCreator';
import useFetch from '../useFetch';
import './css/categorylanding.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoryLanding = ({ getters, setters }) => {
    const { data: products, isPending, error } = useFetch("http://localhost:8000/products");

    /* filter colors */

    let colors = ["#ffffff", "#43c0cf", "#3d402f", "#4aaf00", "#315bbd", "#ec6115", "#dc041d", "#efead7"];

    let filterColors = document.querySelectorAll("#filter-colors li");

    for (let i = 0; i < filterColors.length; i++) {
        filterColors[i].style.backgroundColor = colors[i];
    }

    AOS.init(
        {
            offset: 200,
        }
    );

    return (
        <div className="container-fluid clp">
            <div className="row">
                <div className="col-12 popular-items-header">
                    <span>SERVICES</span>
                    <hr className='popular-items-header-hr' />
                </div>
                <section id="filters" className="col-12 ">
                    <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-between p-2 p-md-4">
                        <label htmlFor="price">Price:</label>
                        <select name="price" id="price">
                            <option value="Ukraine sport">$0.00 - $100.00</option>
                            <option value="Ukraine sport">$100.00 - $500.00</option>
                            <option value="Ukraine sport">$500.00 - $1000.00</option>
                            <option value="Ukraine sport">$1000.00+</option>
                        </select>
                    </div>
                    <div id="filter-colors" className="col-12 col-md-6 col-xl-4 p-2 p-md-4">
                        <ul className="d-flex justify-content-between">Color:
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                    </div>
                    <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-between p-2 p-md-4">
                        <label htmlFor="brands">Brands:</label>
                        <select name="brands" id="brands">
                            <option value="Tommy Hilfiger">Tommy Hilfiger</option>
                            <option value="Polo">Polo</option>
                            <option value="Adidas">Adidas</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-between p-2 p-md-4">
                        <label htmlFor="sort">Sort By:</label>
                        <select name="sort" id="sort">
                            <option value="Ukraine sport">Price</option>
                            <option value="Ukraine sport">Name</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-between p-2 p-md-4">
                        <label htmlFor="size">Size:</label>
                        <select name="size" id="size">
                            <option value="Ukraine sport">Small</option>
                            <option value="Ukraine sport">Medium</option>
                            <option value="Ukraine sport">Large</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-between p-2 p-md-4">
                        <label htmlFor="show">Show:</label>
                        <select name="show" id="show">
                            <option value="Ukraine sport">16 per page</option>
                            <option value="Ukraine sport">8 per page</option>
                            <option value="Ukraine sport">4 per page</option>
                        </select>
                    </div>
                </section>
                <section className="col-12 my-4 text-center">
                    <p>591 results in apparel</p>
                </section>
                <section className="container-fluid popular-items">
                    <div className="row">
                        {error && <p>{error}</p>}
                        {isPending && <p><i className="fa-solid fa-spinner fa-spin-pulse fa-xl"></i></p>}
                        {products && <TileListCreator products={products} getters={getters} setters={setters} section='clp' />}

                    </div>

                </section>
                <section className="benefits" >
                    <div className="container-fluid">
                        <div className="row improve">
                            <div className="col-3" data-aos="fade-right" data-aos-duration="1000">
                                <img src="img/benefits/improve.jpg" alt="blue improve icon" />
                                <h1 className='mt-2'>IMPROVE YOUR BUSINESS</h1>
                                <p>A highly competent team that consistently boosts each client's ROI while reducing their business risk</p>
                            </div>
                            <div className="col-7"  >
                                <img className='row-bg' src="img/benefits/improve-bg.jpg" alt="" />
                            </div>
                        </div>
                        <div className="seperate">

                        </div>
                        <div className="row fast-delivery">
                            <div className="col-7" >
                                <img src="img/benefits/fast-delivery-bg.jpg" alt="" />
                            </div>
                            <div className="col-3" data-aos="fade-left" data-aos-duration="1000">
                                <img src="img/benefits/fast-delivery.jpg" alt="blue fast delivery icon" />
                                <h1>FAST DELIVERY</h1>
                                <p>Our ongoing commitment to quick service delivery and developing next-generation skills</p>
                            </div>
                        </div>
                        <div className="seperate">

                        </div>
                        <div className="row method ">
                            <div className="col-3" data-aos="fade-right" data-aos-duration="1000">
                                <img src="img/benefits/recycle.jpg" alt="blue recycle icon" />
                                <h1>EFFICIENT METHODS</h1>
                                <p>A structured process created to produce quantifiable economic outcomes and predictable expenses</p>
                            </div>
                            <div className="col-7" >
                                <img className='row-bg' src="img/benefits/method-bg.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CategoryLanding;