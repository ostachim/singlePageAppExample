import React from 'react';
import {Link} from 'react-router-dom';
import Product from '../components/Product'



const ProductsPage = ({match}) => {
    return (  
    <>
        <h2>strona produktu</h2>
        <Product name={match.params.id}/>
        <Link to="/products">Powrót do listy produktów</Link>
    </>
     );
}
 
export default ProductsPage;