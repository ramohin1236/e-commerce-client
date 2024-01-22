import SpecialProduct from '../../components/SpecialProduct/SpecialProduct';
import './Special.css'

const Special = () => {
    return (
        <div className='container-xxl'>
            <div className='row'>
               <div className='section-heading'>
                 Special Product
               </div>
            </div>
          <div className='row'>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
          </div>
        </div>
    );
};

export default Special;