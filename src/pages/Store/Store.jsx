/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import './Store.css';
import ReactStars from "react-rating-stars-component";
import { FaAlignJustify, FaBars, FaEquals } from "react-icons/fa";
// import { useState } from "react";
import ProductCard from './../../components/FeaturedProduct/ProductCard';



const Store = () => {

//     const [grid, setGrid] = useState(4)
// console.log(grid);
//     // alert(grid)
    return (
        <div>
            <Meta title={"Our Store"} />
            <BreadCrump title="Our Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shop By Category
                                </h3>
                                <div>
                                    <ul className="ps-0 ul">
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className="sub-title">
                                        Availability
                                    </h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id=""
                                            />
                                            <label className="form-check-label" htmlFor="">
                                                In Stock {1}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label" htmlFor="">
                                                Out Of Stock {0}
                                            </label>
                                        </div>

                                    </div>
                                    {/* price */}
                                    <h5 className="sub-title mt-3">
                                        Price
                                    </h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating ">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="From" />
                                            <label htmlFor="floatingInput1">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="To" />
                                            <label htmlFor="">To</label>
                                        </div>
                                    </div>

                                    {/* Color */}
                                    <h5 className="sub-title mt-3">
                                        Colors
                                    </h5>
                                    <div>
                                        <div className="d-flex flex-wrap">
                                            <ul className="colors ps-0">
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
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
                                    </div>

                                    {/* Size */}
                                    <h5 className="sub-title mt-3">
                                        Size
                                    </h5>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-1" />
                                        <label className="form-check-label" htmlFor="color-1">
                                            S(2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-2" />
                                        <label className="form-check-label" htmlFor="color-2">
                                            M(2)
                                        </label>
                                    </div>


                                </div>
                            </div>

                            {/* products tags */}
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Random Product
                                </h3>
                                <div className="random-products d-flex mb-4">
                                    <div className="w-25">
                                        <img className="img-fluid" src="/public/watch-1.png" alt="" />
                                    </div>
                                    <div className="w-75">
                                        <h5>
                                            Kid's Watch,it is very smart for all ages.
                                        </h5>
                                        <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                        <b>$300</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex">
                                    <div className="w-25">
                                        <img className="img-fluid" src="/public/watch-1.png" alt="" />
                                    </div>
                                    <div className="w-75">
                                        <h5>
                                            Kid's Watch,it is very smart for all ages.
                                        </h5>
                                        <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                        <b>$300</b>
                                    </div>
                                </div>
                            </div>
                        </div>
       <div className="col-9">
  <div className="filter-sort-grid mb-4">
         <div className="d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center gap-10">
       <p className="mb-0" style={{ "width": "100px" }}>Sort By:</p>
            <select name="" className="form-control form-select" id="">
           <option value="manual">Featured</option>
              <option value="best-selling" selected="selected">
                                                Best Selling
          </option>
   <option value="title-ascending">
                                                Alphabetically, Z-A
   </option>
        <option value="price-ascending">
                                                Price, low to high
                  </option>
          <option value="price-descending">
                                                Price, high to low
              </option>
          <option value="created-ascending">
                                                Date, old to new
      </option>
              <option value="price-descending">
                                                Date, new to old
  </option>
                </select>
    </div>
 <div className="d-flex align-items-center gap-10">
                     <p className="totalProducts mb-0 ">21 Products</p>
             <div className="d-flex gap-10 align-items-center fs-4">
                       <FaAlignJustify  className="icon" />
                  <FaBars  className="icon" />
          <FaEquals  className="icon" />
   <FaBars className="icon" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* product list */}
          <div className="products-list pb-5 ">
              <div className="d-flex flex-wrap  gap-60">
                <ProductCard  />
              <ProductCard />
         <ProductCard />
        <ProductCard />
      <ProductCard />

                                    
                       </div>


                 </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Store;