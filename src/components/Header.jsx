import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";



const Header = () => {
    return (
        <div>
            {/* header top section */}
              <div className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div  className="col-6 text-white">
                            <p className="mb-0" > Free shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline: <a href="tel: +08801533872264" className="text-white">
                                    01533872264
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
              </div>
{/* header middle section */}
               <header className="header-upper py-3">
  <div className="container-xxl">
     <div className="row align-items-center">
        <div className="col-2">
            <h1><Link className="text-white">CNC.</Link></h1>
        </div>
        <div className="col-5">
             {/* ---- */}
             <div className="input-group">
  <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
  <span className="input-group-text p-3" id="basic-addon2">
  <BsSearch className="fs-5"/>

  </span>
</div>
             {/* ---- */}
        </div>
        <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                    <Link className="d-flex align-items-center">
                    <img src="/public/svg-compare.svg" alt="" />
                    <p className="text-white mr-3 mb-0">Compare <br /> Products</p>
                    </Link>
                </div>
                <div>
                <Link className="d-flex align-items-center">
                    <img src="/public/wishlist-1.png" alt="" />
                    <p className="text-white mr-3 mb-0">Favourite<br /> Wishlist</p>
                    </Link>
                </div>
                <div>
                <Link className="d-flex align-items-center">
                    <img src="/public/login.png" alt="" />
                    <p className="text-white mr-3 mb-0">Login<br /> Account</p>
                    </Link>
                </div>
                <div>
                <Link className="d-flex align-items-center gap-10">
           
                <img src="/public/cart.png" alt="" />
                    <div className="d-flex flex-column">
                        <span className="badge bg-white text-dark gap-10">
                         00
                        </span >
                        <p className="py-2 text-white fs-6 mb-0">$500</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
     </div>
  </div>
               </header>


               <header className="header-bottom py-3">
                   <div className="container-xxl">
                      <div className="row">
                        <div className="col-12">
                            <div className="menu_bottom d-flex align-items-center gap-30">
                                 <div>
                                 <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Product Categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link to="" className="dropdown-item text-white" >Action</Link></li>
                    <li><Link to="" className="dropdown-item text-white" >Another action</Link></li>
                    <li><Link to="" className="dropdown-item text-white" >Something else here</Link></li>
                </ul>
            </div>
                                 </div>
                                 <div className="menu-links">
                              <div className="d-flex align-items-center gap-15">
                                <NavLink className="text-white" to="/">Home</NavLink>
                                <NavLink className="text-white" to="/store">Store</NavLink>
                                <NavLink className="text-white" to="/blogs">Blogs</NavLink>
                                <NavLink className="text-white" to="/contact">Contact</NavLink>
                              </div>
                                 </div>
                            </div>
                        </div>
                      </div>
                   </div>
               </header>
        </div>
    );
};

export default Header;