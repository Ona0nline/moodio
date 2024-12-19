import React from "react";

const Tooltip = (props) =>{
    return(
      <div className="group relative inline-block">
        {props.children}
        <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition
        bg-dark_spring_green text-white p-2 rounded absolute top-full mt-2">{props.tooltip}</span>
      </div>

    )
}

export default Tooltip