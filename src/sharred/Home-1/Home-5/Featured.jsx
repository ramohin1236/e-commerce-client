/* eslint-disable react/prop-types */
import FeaCart from "../../../pages/FeaturedCartt/FeaCart";



const Featured = ({productState}) => {
    return (
        <div className='container-xxl'>
           
       
           <div className="row">
             <div className='col-12'>
                <h2 className='section-heading'>Our Featured Collection</h2>
             </div> 

            <div className="d-flex flex-wrap gap-10 ">
            {
                    productState && productState?.map?.((item,idx)=>{
                        if(item?.tags == "featured"){
                          return  (
                          <FeaCart
                          quantity={parseFloat(item?.quantity)}
                          sold={parseFloat(item?.sold)}
                          price={parseFloat(item?.price)}
                          ratings={item?.totalrating.toString()}
                          brand={item?.brand} 
                          id={item?._id}
                          title={item?.title} key={idx}
                          img={item?.images[0]?.url}
                          
                          />
                          )
                        }
                         
                        
                    })
                }
            
             {/* <ProductCard/>
             <ProductCard/>
             <ProductCard/> */}
            
            </div>
             
           </div>
        </div>
    );
};

export default Featured;