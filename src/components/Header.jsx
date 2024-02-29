/* eslint-disable no-unused-vars */
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaRegHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Header = () => {

    const dispatch = useDispatch()
   const navigate =useNavigate()
  const cartState = useSelector(state=> state?.auth?.cartProducts)
  const authState =useSelector(state=>state?.auth)
  const productState = useSelector((state)=>state?.product?.product)
  const [productOpt,setProductOpt]=useState([])
  const [total,setTotal]= useState(null);
  const [paginate, setPaginate] = useState(true);
  

     
  useEffect(()=>{
        let sum =0;
        for(let index =0; index < cartState?.length; index++){
            sum = sum+ (Number(cartState[index].quantity)*Number(cartState[index].price))
            setTotal(sum)
        }
     },[cartState])

     useEffect(()=>{
        let data =[]
        for(let index =0; index < productState?.length; index++){
            const element =productState[index]
            data.push({id:index, prod:element?._id, name:element?.title})
        }
setProductOpt(data)
     },[productState])
    return (
        <div>
            {/* header top section */}
              <div className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row ">
                        <div  className="col-6 text-white d-flex">
                            {/* <p className="mb-0" > Free shipping Over $100 & Free Returns</p> */}
                      {
                        authState?.user === null? <Link to='/login'>Please Login</Link> :
                        <p className="text-white mr-3 mb-0 ">
                        Welcome {authState?.user?.firstname}</p>
                      }
                            
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
             <Typeahead
        id="pagination-example"
        onPaginate={() => console.log('Results paginated')}
        onChange={(selected)=>{
              navigate(`/store/product/${selected[0].prod}`)
        }}
        minLength={2}
        options={productOpt}
        paginate={paginate}
        labelKey={"name"}
        placeholder="Search for product here..."
      />
  <span className="input-group-text p-3" id="basic-addon2">
  <BsSearch className="fs-5"/>

  </span>
</div>
             {/* ---- */}
        </div>
        <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                    <Link to="/compare" className="d-flex align-items-center">
                    <IoGitCompareSharp className="fs-1 text-dark"/>&nbsp; 
                    <p className="text-white mr-3 mb-0">Compare <br /> Products</p>
                    </Link>
                </div>
                <div>
                <Link to="/wish-list" className="d-flex align-items-center">
                <FaRegHeart  className="fs-1 text-dark"/>&nbsp; 
                    <p className="text-white mr-3 mb-0">Favourite<br /> Wishlist</p>
                    </Link>
                </div>
                <div>
                <Link to='/login' className="d-flex align-items-center">
                <FaUserAlt className="fs-1 text-dark"/>&nbsp; 
                    
                    
                     <p className="text-white mr-3 mb-0">Login</p> 
                    

                    
                    </Link>
                </div>
                <div>
                <Link to="/cart" className="d-flex align-items-center gap-10">
           
                <FaShoppingCart className="fs-1 text-dark" />&nbsp; 
                    <div className="d-flex flex-column">
                        <span className="badge bg-white text-dark gap-10">
                        {cartState?.length ? cartState?.length : "00"}
                        </span >
                        <p className="py-2 text-white fs-6 mb-0">$ {total? total: "00"}</p>
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