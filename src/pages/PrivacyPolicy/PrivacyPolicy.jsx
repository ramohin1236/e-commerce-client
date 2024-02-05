import BreadCrump from '../../components/BreadCrump';
import Meta from '../../components/Meta/Meta';
import './PrivacyPolicy.css';
import Container from './../../components/Container/Container';

const PrivacyPolicy = () => {
    return (
        <div>
             <Meta title={"Privacy-policy"} />
            <BreadCrump title="Privacy-policy" /> 
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

export default PrivacyPolicy;