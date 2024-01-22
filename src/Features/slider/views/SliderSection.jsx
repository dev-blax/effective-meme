import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

export default function SliderSection() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        autoplay: false,
        arrows: true,
        prevArrow: <button type="button" className="slick-prev"><i className="fas fa-angle-left"></i></button>,
        nextArrow: <button type="button" className="slick-next"><i className="fas fa-angle-right"></i></button>,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          },
        ],
      };
  return (
            <section className="slider-area position-relative">
                <div className="container-fluid p-0 fix">
                    <Slider {...settings} className="row no-gutters slider-two-active">
                        <div className="col-lg-4">
                            <div className="slider-two-item">
                                <div className="thumb"><img src="img/slider/s_slider_img01.jpg" alt="" /></div>
                                <div className="product-tooltip" style={{ left: '40%', top: '45%' }}>
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product02.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                                <div className="product-tooltip" style={{ left: '39%', bottom: '15%' }} >
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item bottom">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product03.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="slider-two-item">
                                <div className="thumb"><img src="img/slider/s_slider_img02.jpg" alt="" /></div>
                                <div className="product-tooltip" style={{ left: '33%', top: '15%' }}>
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item right">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product02.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                                <div className="product-tooltip" style={{ left: '40%', top: '45%' }}>
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product02.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                                <div className="product-tooltip" style={{ left: '35%', top: '12%' }} >
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item bottom">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product03.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="slider-two-item">
                                <div className="thumb"><img src="img/slider/s_slider_img03.jpg" alt="" /></div>
                                <div className="product-tooltip" style={{ left: '24%', top: '42%' }}>
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product02.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                                <div className="product-tooltip" style={{ left: '35%', top: '20%' }} >
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item bottom">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product03.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="slider-two-item">
                                <div className="thumb"><img src="img/slider/s_slider_img04.jpg" alt="" /></div>
                                <div className="product-tooltip" style={{ left: '35%', top: '42%' }} >
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product02.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                                <div className="product-tooltip" style={{ left: '25%', top: '15%' }} >
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item bottom">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product03.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="slider-two-item">
                                <div className="thumb"><img src="img/slider/s_slider_img05.jpg" alt="" /></div>
                                <div className="product-tooltip" style={{ left: '35%', top: '30%' }} >
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product02.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                                <div className="product-tooltip" style={{ left: '35%', top: '10%' }}>
                                    <div className="tooltip-btn"></div>
                                    <div className="features-product-item product-tooltip-item bottom">
                                        <div className="close-btn"><i className="flaticon-targeting-cross"></i></div>
                                        <div className="features-product-thumb">
                                            <a href="shop-details.html">
                                                <img src="img/product/features_product03.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="features-product-content">
                                            <div className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <h5><a href="shop-details.html">Exclusive Handbags</a></h5>
                                            <p className="price">$45.00</p>
                                            <div className="features-product-bottom">
                                                <ul>
                                                    <li className="color-option">
                                                        <span className="gray"></span>
                                                        <span className="cyan"></span>
                                                        <span className="orange"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="features-product-cart"><a href="cart.html">add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

  )
}
