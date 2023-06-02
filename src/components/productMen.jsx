import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from './Category';
import Endpoints from '../api/Endpoints';
import Navbar from './Navbar';


const ProductMen = () => {

    const [categories, setCategories] = useState([]);


    const getData = () => {
        axios.get(Endpoints.PRODUCT_MEN_URL)
            .then(response => {
                console.log(response.data);
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error)
            });
    };

    useEffect(() => {
        getData();
    }, [])

 

    return (
        <div className="container">
           <Navbar />

            <div className="row">
                {
                    categories.map((category)=> (
                    <Category data = {category} />))
                }         

                
            </div>
        </div>

        
    );
};

export default ProductMen;