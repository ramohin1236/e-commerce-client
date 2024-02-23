/* eslint-disable react/prop-types */
import SpecialProduct from '../../components/SpecialProduct/SpecialProduct';
import './Special.css'

const Special = ({productState}) => {
 
    return (
        <div className='container-xxl'>
            
          <div className='d-flex flex-wrap '>
          {
                    productState && productState?.map((item,idx)=>{
                        if(item?.tags == "special"){
                          return  <SpecialProduct
                          quantity={parseFloat(item?.quantity)}
                          sold={parseFloat(item?.sold)}
                          price={parseFloat(item?.price)}
                          ratings={item?.totalrating.toString()}
                          brand={item?.brand} 
                          title={item?.title} key={idx}/>
                        }
                         
                        
                    })
                }
            
            
  
          </div>
        </div>
    );
};

export default Special;