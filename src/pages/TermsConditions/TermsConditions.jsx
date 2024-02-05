import BreadCrump from "../../components/BreadCrump";
import Container from "../../components/Container/Container";
import Meta from "../../components/Meta/Meta";
import "./TermsConditions.css";

const TermsConditions = () => {
    return (
        <div>
                 <Meta title={"Terms & Conditions"} />
            <BreadCrump title="Terms & Conditions" />
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

export default TermsConditions;