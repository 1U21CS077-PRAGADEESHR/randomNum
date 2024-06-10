import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

function Random(){
    const [num,setRand] = useState(0);

    function change(){ 
        var randomnum=Math.floor((Math.random()*10)+1)
   
        setRand(randomnum) 
    }

    return(
        <div>
            <h2>Random Number</h2>
        <h1>{num}</h1>
        <button onClick={change}>Click Me</button>

        </div>
        
    )
}

root.render(<Random></Random>)






