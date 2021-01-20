import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import ProductsPage from '../pages/ProductsPage';
import ProductsListPage from '../pages/ProductsListPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';

const Page = () => {
    return ( 
        <>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/products/:id" component={ProductsPage}/>
                <Route path="/products" component={ProductsListPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/admin" component={AdminPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route component={ErrorPage}/>
                
            </Switch>
        </>
        
     );
}
 
export default Page;