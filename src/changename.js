



import {useState} from "react"
import ReactDOM from "react-dom/client"


const root=ReactDOM.createRoot(document.getElementById("root"))
function Changename(){
    var [myname,setmyname]=useState("hello")
    function change(){

        setmyname("world")
    }
    return(
        <div>
                    <h1>{myname}</h1>
                    <button onClick={change}>change</button>
        </div>

    )
}
root.render(<div>
    <Changename></Changename>
    
</div>)