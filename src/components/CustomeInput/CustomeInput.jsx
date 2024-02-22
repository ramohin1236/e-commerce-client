/* eslint-disable react/prop-types */
/* eslint-disable no-undef */


const CustomeInput = (props) => {
    const {type,name,placeholder,className,value,onBlur,onChange,id}= props;
    return (
        <div className=" mb-3">
        <input
         placeholder={placeholder}
         type={type}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
           className={`form-control ${className}`} 
           id={id}
           />
      
      </div>
    );
};

export default CustomeInput;