import React from 'react'

function ActivityItem({height, count}) {
    // const newheight = `${height *0.55}px `;
    // const newheight = `${height *5}px `;
// const newheight='30px'
const newheight=`${count * 20}px`
    return (
        <div 
        style={{height:`${newheight}`}}
        className=" actItem" >
       <h3>{count}</h3>
        </div>
    )
}

export default ActivityItem