import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ProductsListPage.css'
const products = ["książka o React","książka o JavaScript","książka o Ajax"]

const ProductsList = () => {
    const list = products.map(product => (
        <li key={product}>
            <Link to={`/products/${product}`}>{product}</Link>
        </li>
    ))
    return ( 
        <div className="products">
            <h3>Lista produktów</h3>
            <div>
                <ul>
                    {list}
                </ul>
            </div>

        </div>
     );
}
 
export default ProductsList;