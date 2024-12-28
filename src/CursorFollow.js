import React ,{ useState, useEffect }from "react";
import {motion} from "framer-motion";

// Making a custom cursor
const CursorFollow = () =>{
  // Remember with usestate the two vars are the variable that will be manipulated and the current
  //variable. You also need to set the initial value of the current variable
  const [CursorPosition,setCursorPosition] = useState({x:0,y:0})
  
useEffect(() => {
    const handleMouseMove = (e) => {
      // PageX and PageY refers to the mouses position relative to the entire document
      // ClientX and ClientY refer to the mouse position relative to the viewport
      // When you attach an event listener (e.g., mousemove, click, etc.) to an element, 
      // the browser creates an event object for that specific event and passes it to your 
      // handler function. The event object contains a lot of useful data about the event 
      // itself:
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

return(
  <div style={{position:"relative",height:"100vh"}}>
    {/* Customise the cursor */}
    <motion.div
    style={{
      width:"80px",
      height:"40px",
      backgroundColor:"black",
      position:"absolute",
      pointerEvents: "none",
      zIndex: 1000, // Ensure it is on top of everything else
      borderRadius: "20px",
    }}

    animate={{
      x: CursorPosition.x - 10, // Center cursor
      y: CursorPosition.y - 10,
        }}

    transition={{
      type: "spring",
      stiffness: 500,
      damping: 30,
        }}
    />

  </div>
)
}
export default CursorFollow