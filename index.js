import React from "react"
import ReactDOM from "react-dom"
import Cards from "./Cards"
import Array from "./Array"
import "./index.css"

function New(value){
    return(
        
                    <Cards
imgsrc={value.imgsrc}
title={value.title}
btn={value.btn}
/> 
    )
}



ReactDOM.render(
<>
<h2>Best Netflix Series !</h2>
<div className="di">
{Array.map(New)}
</div>
</>,document.getElementById("root"))
