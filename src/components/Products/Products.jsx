import React, { useEffect, useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import Product from '../product/Product';




function Products() {
    const [btn, setbtn] = useState('True');

    let arrayof3Obj = [
        { name: "apple", price: 25, amount: 10, isSeeson: true },
        { name: "banana", price: 200, amount: 50, isSeeson: false },
        { name: "gghjk", price: 80, amount: 20, isSeeson: true },
    ]

    useEffect(
        () => { alert("WELCOME") }

        , []
    );

    function btnfunc() {
        setbtn(!btn);
    }


    return (
        <div>

            <h1>Products

            </h1>
             <button onClick={btnfunc}>click</button>

            {btnfunc? arrayof3Obj.map((item) => <Product nameofproduct = {item.name}/>) : <AddProduct/>}
           
    




        </div>

    );








}

export default Products;