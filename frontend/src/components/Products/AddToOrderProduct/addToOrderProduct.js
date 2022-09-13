import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from "../../../custom-axios/axios";
import orderAxios from "../../../custom-axios/orderAxios";

const AddToOrderProduct = (props) => {

    const { id } = useParams();

    const [formData, updateFormData] = React.useState({
        productName: "",
        amount: 0,
        currency: "MKD",
        sales: 0,
        image: "",
        quantity: 1
    })

    const {productName, amount, currency, sales, image, quantity} = formData;

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        loadProduct();
    },[]);

    const onFormSubmit = async (e) => {
        e.preventDefault();

        await orderAxios.post(`/order/addToOrder`,{
            "id": id,
            "name": productName,
            "amount": amount,
            "currency": currency,
            "sales": sales,
            "image": image,
            "quantity": quantity
        });
        window.location.href = "/order";
    }

    const loadProduct = async () => {
        const result =await axios.get(`/product/dto/${id}`);
        updateFormData(result.data)
    }

    return (
        <div className="container mm-4 mt-5">
            <div className="row mt-5">
                <div className="col-md-5">
                    <form onSubmit={onFormSubmit}>
                        <div className="form-group mt-2">
                            <label htmlFor="productName">Product name</label>
                            <input type="text"
                                   disabled={true}
                                   className="form-control"
                                   id="productName"
                                   name="productName"
                                   required
                                   placeholder="Enter product name"
                                   value={productName}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="amount">Amount</label>
                            <input type="text"
                                   disabled={true}
                                   className="form-control"
                                   id="amount"
                                   name="amount"
                                   placeholder="Amount"
                                   required
                                   value={amount}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label>Currency</label>
                            <select name="currency"
                                    disabled={true}
                                    className="form-control"
                                    value={currency}
                                    onChange={handleChange}>
                                {props.currency.map((term) =>
                                    <option value={term}>{term}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="sales">Sales</label>
                            <input type="text"
                                   disabled={true}
                                   className="form-control"
                                   id="sales"
                                   name="sales"
                                   placeholder="Sales"
                                   required
                                   value={sales}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <img src={image} alt={"productItem"} style={{height: "70px"}}/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number"
                                   min={1}
                                   disabled={false}
                                   className="form-control"
                                   id="quantity"
                                   name="quantity"
                                   placeholder="Quantity"
                                   required
                                   value={quantity}
                                   onChange={handleChange}
                            />
                        </div>
                        {/*<div className="form-group mt-2">*/}
                        {/*    <label htmlFor="image">Image</label>*/}
                        {/*    <input type="text"*/}
                        {/*           className="form-control"*/}
                        {/*           id="image"*/}
                        {/*           name="image"*/}
                        {/*           required*/}
                        {/*           placeholder="Image"*/}
                        {/*           value={image}*/}
                        {/*           onChange={handleChange}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <button id="submit" type="submit" className="btn btn-primary mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddToOrderProduct;