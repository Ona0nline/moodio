import React from "react";

const Tooltip = ({tooltip,children}) =>{
    return(
      <div className="group relative inline-block">
        {children}
        <span className="invisible absolute opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity text-white p-2 rounded top-full mt-2 whitespace-nowrap">
        {tooltip}
      </span>      
      </div>

    )
}

export default Tooltip