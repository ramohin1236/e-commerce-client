import { Link } from "react-router-dom";
import "./BlogCart.css"

const BlogCart = () => {
    return (
       
            <div className="blog-card">
                <div className="card-image">
                    <img className="img-fluid" src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/1:1/w_1500,h_1500,c_limit/Garmin-Epix-Pro-Gear.jpg" alt="" />
                    
                </div>
                <div className="blog-content">
                <p className="date">18 jan,2024</p>
                <h5 className="title"> This is amaizing i-phone 15 pro-max</h5>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, soluta deleniti sapiente maiores, rerum possimus vel consectetur earum deserunt adipisci officiis nesciunt provident nam voluptas!</p>
                <Link to='/blogs/:id' className="blog-button">Read More</Link>
                </div>
            </div>
      
    );
};

export default BlogCart;