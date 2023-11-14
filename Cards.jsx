import React from "react"
import "./index.css"

function Cards(props) {
    return (
      <div className="cont">
        <div className="div1">
          <div className="img-container">
            <img src={props.imgsrc} alt={props.title} />
          </div>
          <div className="div2">
            <p>{props.title}</p>
            <button>{props.btn}</button>
          </div>
        </div>
      </div>
    );
  }
  
export default Cards;
