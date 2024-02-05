import './Blog.css';
import BlogCart from '../../components/BlogCart/BlogCart';
import './Blog.css';
import Container from '../../components/Container/Container';
import Meta from './../../components/Meta/Meta';
import BreadCrump from './../../components/BreadCrump';
const Blog = () => {
    return (
     <>
     <Meta title={"Cart"}/>
     <BreadCrump title="Cart"/>
       <Container class1="blog-wrapper home-wrapper-2 py-5">
         <div className='container-xxl'>
           
       
           <div className="row">
             <div className='col-12'>
                <h2 className='section-heading'>Our Latest News</h2>
             </div> 
             
           </div>
           <div className="row">
             <div className="col-3">
            <BlogCart/>
             </div>
             <div className="col-3">
            <BlogCart/>
             </div>
             <div className="col-3">
            <BlogCart/>
             </div>
             <div className="col-3">
            <BlogCart/>
             </div>
           </div>
        </div>
       </Container>
     </>
    );
};

export default Blog;