import PopularCart from "../../components/Popular/PopularCart";


const Popular = () => {
    return (
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h3>Our Popular Products</h3>
                </div>
               
            </div>
             <div className="row">
                
             <PopularCart/>
                <PopularCart/>
                <PopularCart/>
             </div>
        </div>
    );
};

export default Popular;