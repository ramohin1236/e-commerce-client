import { Link } from "react-router-dom";
import "./BlogCart.css"

const BlogCart = () => {
    return (
       
            <div className="blog-card">
                <div className="card-image">
                    <img className="img-fluid" src="/public/blog-1.jpg" alt="" />
                    
                </div>
                <div className="blog-content">
                <p className="date">18 jan,2024</p>
                <h5 className="title"> This is amaizing i-phone 15 pro-max</h5>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, soluta deleniti sapiente maiores, rerum possimus vel consectetur earum deserunt adipisci officiis nesciunt provident nam voluptas!</p>
                <Link to='/' className="blog-button">Read More</Link>
                </div>
            </div>
      
    );
};

export default BlogCart;