import React from 'react'
import img from "../../Exports/noMessageIcon.svg"
function NoMessageYet({message}) {
    return (
      <div className=" noMessage">
        <img src={img} alt=""/>
        
        <h4>{message}</h4>
      </div>
    );
}

export default NoMessageYet
