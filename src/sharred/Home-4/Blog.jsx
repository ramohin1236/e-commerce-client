import './Blog.css';
import BlogCart from '../../components/BlogCart/BlogCart';
import './Blog.css';
const Blog = () => {
    return (
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
    );
};

export default Blog;