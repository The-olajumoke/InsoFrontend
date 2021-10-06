import React from 'react'
import img from "../../Exports/noMessageIcon.svg"
function NoMessageYet() {
    return (
      <div className=" noMessage">
        <img src={img} alt=""/>
        
        <h4>It’s lonely in here. Create a new discussion</h4>
      </div>
    );
}

export default NoMessageYet
