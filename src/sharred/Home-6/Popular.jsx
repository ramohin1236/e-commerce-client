/* eslint-disable react/prop-types */
// import PopularCart from "../../components/Popular/PopularCart";


import PopularCart from './../../components/Popular/PopularCart';


const Popular = ({productState}) => {
    console.log(productState);
    return (
      <div className="popular-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h3>Our Popular Products</h3>
                </div>
               
            </div>
            <div className='d-flex flex-wrap gap-15'>
          {
                    productState && productState?.map((item,idx)=>{
                        if(item?.tags == "popular"){
                          return  <PopularCart
                    
                          quantity={parseFloat(item?.quantity)}
                          id={item?._id}
                          img={item?.images[0]?.url}
                          price={parseFloat(item?.price)}
                          ratings={item?.totalrating.toString()}
                          brand={item?.brand} 
                          title={item?.title} key={idx}/>
                        }
                         
                        
                    })
                }
            
            
  
          </div>
        </div>
      </div>
    );
};

export default Popular;