
import React from "react"

function Card({title, total}){
return (
<div className="card mb-5">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{total}</h6>
    
  </div>
</div>
)
}

export default Card