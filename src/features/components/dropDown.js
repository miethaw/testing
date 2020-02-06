import React from "react";

const DropDown = props => {
  // const [drop,setDrop] = useState(false)
  const { label, defaultValue, additionalValue } = props;
  return (
    <div>
      <div className=" d-flex flex-row p-1 ">
          <div className=" dropdown border col-lg-12  rounded  " data-toggle="dropdown">
          <div className="d-flex align-items-center">
          
                <span className="px-1">
                    {" "}
                    <i className="fa fa-times" style={{fontSize:13, color:'#23c49e'}}></i>{" "}
                </span>
                <span style={{fontSize:13, color:'#A9A9A9'}}> {label}</span>
                <span className="btn dropdown-toggle px-3"> {defaultValue} </span>  
            </div>
                <div class="dropdown-menu col-lg-12">
                    <div className="dropdown-item"> {additionalValue} </div>
                </div>
            </div>
      
        {/* </div> */}
      </div>
    </div>
  );
};
export default DropDown;