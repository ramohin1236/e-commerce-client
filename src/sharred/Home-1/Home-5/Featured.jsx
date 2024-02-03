import ProductCard from "../../../components/FeaturedProduct/ProductCard";


const Featured = () => {
    return (
        <div className='container-xxl'>
           
       
           <div className="row">
             <div className='col-12'>
                <h2 className='section-heading'>Our Featured Collection</h2>
             </div> 

            <div className="d-flex flex-wrap ">
            <ProductCard/>
             <ProductCard/>
             <ProductCard/>
             <ProductCard/>
            
            </div>
             
           </div>
        </div>
    );
};

export default Featured;