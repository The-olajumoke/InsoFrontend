import React from 'react'

function ActivityItem({ count}) {
  
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