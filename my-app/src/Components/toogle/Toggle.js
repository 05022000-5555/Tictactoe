import React, {useState} from "react";
import './ToggleStyle.css'
function Toggle(){
    const [on, setOn] = useState(false)
    return (
        <div>
        <div className={`toggle ${on ? "color" : ""} `} onClick={()=> {setOn(on=>!on)}}>
           <div className={`snipper ${on ? "active" : ""}`}></div>
        </div>
           {/* <div className="control">
                <p onClick={()=>{setOn(true)}}>Turn on</p>
                <p onClick={()=>{setOn(false)}}>Turn off</p>
           </div> */}
        </div>
    )
}
export default Toggle