import BreadCrump from "../../components/BreadCrump";
import Container from "../../components/Container/Container";
import Meta from "../../components/Meta/Meta";
import "./ShippingPolicy.css";

const ShippingPolicy = () => {
    return (
        <div>
             <Meta title={"Shipping-Policy"} />
            <BreadCrump title="Shipping-Policy" /> 
            <Container class1="policy-wrapper py-5 home-wrpper-2">
          
        <div className="row">
            <div className="col-12">
             <div className="policy">
                </div>   
            </div>
        </div>
            
                </Container>  
        </div>
    );
};

export default ShippingPolicy;