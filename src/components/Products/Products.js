import React from 'react';

const Products = (props) => {
    const {name, id} = props.product
    const {addToCart} = props;

    return (
        <div style={{border: '1px solid lime'}}>
          
            <h1>{name} </h1>
            <button onClick={()=> addToCart(id, name)}> Add to Cart</button>
          

        </div>
    );
};

export default Products;