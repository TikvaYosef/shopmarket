import React from 'react';


function Product(props) {


    return (
        <div>
          <h1>product</h1> 

          <h4>name of product: {props.nameofproduct} </h4>
          <h4>price:{props.price}</h4>
          <h4>Amount: {props.amount} </h4>
          <h4>in season?: {props.answer}</h4>

        </div>
    );


}

export default Product;