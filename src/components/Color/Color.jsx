/* eslint-disable react/prop-types */



const Color = (props) => {
    const {colorData,setColor}=props
    return (
        <ul className="colors ps-0">
            {
                colorData && colorData?.map((item,idx)=>{
                    return(
                      <li 
                      onClick={()=>setColor(item?._id)}
                      style={{backgroundColor: item?.title}} key={idx}></li>
                    )

                })
            }


</ul>
    );
};

export default Color;