import React from 'react';
import Products from '../Products/Products';
import { addToCart } from '../Redux/Actions/CartActions';
import { connect } from 'react-redux';


const Shop = (props) => {
    console.log(props)
    const {products, addToCart} = props;
   

    return (
        <div>
            {
                products.map((pd, index)=> <Products 
                product={pd}
                key={index}
                addToCart={addToCart}
                 ></Products>)
            }
        </div>
    );
};
 const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}
 const mapDispatchToProps = {
    addToCart : addToCart
 }    
 // const connectToStore = connect(mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Shop)
