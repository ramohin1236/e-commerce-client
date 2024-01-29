import BlogCart from '../../components/BlogCart/BlogCart';
import BreadCrump from '../../components/BreadCrump';
import Meta from '../../components/Meta/Meta';
import './BlogsPage.css';

const BlogsPages = () => {
    return (
        <div>
               <Meta title={"Blogs"} />
            <BreadCrump title="Blogs" />
            <div className='blog-wrapper home-wrapper-2 py-5'>
          <div className='container-xxl'>
        <div className='row'>
  <div className="col-3">
  <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                   Find By Category
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
  </div>
  <div className="col-9">
    <div className='row'>
     <div className="col-6 mb-3">
        <BlogCart/>
     </div>
     <div className="col-6 mb-3">
        <BlogCart/>
     </div>
     <div className="col-6 mb-3">
        <BlogCart/>
     </div>
     <div className="col-6 mb-3">
        <BlogCart/>
     </div>
    </div>
  </div>
        </div>
          </div>
            </div>
            
        </div>
    );
};

export default BlogsPages;