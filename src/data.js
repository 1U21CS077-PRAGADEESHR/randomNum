import React from "react"
import ReactDOM from "react-dom/client"

const root=ReactDOM.createRoot(document.getElementById("root"))
//Ithu maps da pragadeesh

function One(props){
    return(
        <div>
            <h1>{props.myname}</h1>
            <p>{props.mypara}{props.myname}</p>
        </div>
    )
}
var list=[{
    name:"Pragadeesh",
para:"Ladies and Gentleman,Here is the fucking "},{name:"Virat Kholi",
    para:"I am the best cricketer and my name is "},
{
    name:"SuperStar",
para:"Today tmrw yesrerday,one and only rajini and i have onemore name "}]
root.render(
<div>
    {
        list.map(function(item){
            return<One myname={item.name} mypara={item.para}></One>
        })
    }
</div>
)
export default One