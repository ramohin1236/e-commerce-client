import BreadCrump from "../../components/BreadCrump";
import Meta from "../../components/Meta/Meta";
import "./RefundPolicy.css";

const RefundPoliicy = () => {
    return (
        <div>
             <Meta title={"Refund-policy"} />
            <BreadCrump title="Refund-policy" />
            <section className="policy-wrapper py-5 home-wrpper-2">
                <div className="container-xxl">
        <div className="row">
            <div className="col-12">
             <div className="policy">
                </div>   
            </div>
        </div>
                </div>
                </section>   
        </div>
    );
};

export default RefundPoliicy;