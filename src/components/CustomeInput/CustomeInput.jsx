/* eslint-disable react/prop-types */
/* eslint-disable no-undef */


const CustomeInput = (props) => {
    const {type,name,placeholder,className}= props;
    return (
        <div className=" mb-3">
        <input
         placeholder={placeholder}
         type={type}
          name={name}
           className={`form-control ${className}`} 
           id="floatingInput"
           />
      
      </div>
    );
};

export default CustomeInput;