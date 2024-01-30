import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import './SingleBlog.css';

const SingleBlog = () => {
    return (
        <div>
             <Meta title={"Dynamic Blog Name"} />
            <BreadCrump title="Dynamic Blog Name" /> 
            <div className='blog-wrapper home-wrapper-2 py-5'>
          <div className='container-xxl'>
        <div className='row'>

  <div className="col-12">
    <div className="single-blog-cart">
  
    
        <Link to="/blogs" className="d-flex align-items-center gap-10"><IoMdArrowRoundBack className="fs-4"/> Go Back To Blogs</Link>


        <h3 className="title">
            A Beautiful Sunday Morning Renaissance
        </h3>
        <div className="text-center">
        <img src="/public/watch-1.png" alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil ipsam quia deserunt! Unde voluptas cupiditate possimus totam suscipit, culpa perferendis eius obcaecati in, quisquam illo provident fugit hic expedita!
        Quo dignissimos doloremque illo incidunt, eos quidem enim vitae non sit hic quasi necessitatibus, tenetur laudantium. Quisquam minus voluptatem rem pariatur exercitationem? Nostrum autem vel ut non, dolor aspernatur suscipit.
        Consectetur ea error ratione sed fugiat cupiditate nostrum alias odit laudantium laborum cum veritatis dolore a numquam deleniti, quisquam molestiae placeat illum, saepe ipsam consequatur necessitatibus eveniet adipisci facilis? Ullam.
        Quae, cum! Ipsam debitis iure provident corporis illum error quos ex numquam placeat odio quam facilis nobis, facere perferendis, aliquam, ipsum eveniet nihil eum sapiente blanditiis itaque officiis amet laborum?
        Maiores atque libero ea aliquid! Obcaecati delectus perferendis quos et molestiae consectetur perspiciatis, tempora unde similique ipsa culpa? Quasi earum architecto dicta culpa natus error repudiandae accusamus itaque rem libero.</p>
    </div>
  </div>
        </div>
          </div>
            </div>
        </div>
    );
};

export default SingleBlog;