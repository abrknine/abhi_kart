import React  from 'react';

export default function header(props) {
  return (
    <div>
        <div className="row my-4">
      <div className="col-5">
            <h1>Product-name</h1>
      </div>
      <div className="col-3">   
            <h1>Quantity</h1>
      </div>
        <div className="col-2">
              <h1>Total cost</h1>
        </div>
      
    </div>
    </div>
  )
}

