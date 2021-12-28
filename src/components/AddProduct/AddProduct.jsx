import React, { useState } from 'react';

function AddProduct() {
    let [productt, setProductt] = useState({});
    const [table, setTable] = useState([]);

    const Product1 = (event) => {
        productt[event.target.name] = event.target.value
    };


    // const btn = () => {
    //     setProductt({ ...productt });
    // };

    const saveProduct = () => {

        setTable(table.push(productt))
    }

    return (

        <div>
            <h1>ADD PRODUCT</h1>

            <label htmlFor="text">name</label><br></br>
            <input name="name" type="text" onChange={Product1} /><br></br>

            <label htmlFor="number">price</label><br></br>
            <input name="price" type="number" onChange={Product1} /><br></br>

            <label htmlFor="number">amount</label><br></br>
            <input name="amount" type="number" onChange={Product1} /><br></br>

            <label htmlFor="text">is isSeeson?</label><br></br>
            <input name="is isSeeson?" type="text" onChange={Product1} /><br></br>
            <button onClick={saveProduct}>click</button>


            <div>
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Amount </th>
                        <th>is isSeeson?</th>
                    </tr>
                    {
                        table.map((item =>
                            <tr>
                                <td>{item.nameofproduct}</td>
                                <td>{item.Price}</td>
                                <td>{item.Amount}</td>
                                <td>{item.answer}</td>
                            </tr>
                        ))
                    }

                </table>
            </div>

        </div>


    );

}

export default AddProduct;

