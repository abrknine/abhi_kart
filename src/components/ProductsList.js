import React from 'react';
import Product from  './Product';

export default function ProductsList(props) {
    
  return (
      props.productList.length  > 0 ?
      props.productList.map((product,i)=>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity}  removeitem={props.removeitem}     />
      }) : <h1>No product exist in cart</h1>   
  );
}
