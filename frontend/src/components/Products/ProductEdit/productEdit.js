import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from "../../../custom-axios/axios";

const ProductEdit = (props) => {

    const { id } = useParams();

    const [formData, updateFormData] = React.useState({
        productName: "",
        amount: 0,
        currency: "MKD",
        sales: 0,
        image: ""
    })

    const {productName, amount, currency, sales, image} = formData;

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

        await axios.put(`/product/edit/${id}`,{
            "productName": productName,
            "amount": amount,
            "currency": currency,
            "sales": sales,
            "image": image
        });
        window.location.href = "/";
    }

    const loadProduct = async () => {
        const result =await axios.get(`/product/dto/${id}`);
        updateFormData(result.data)
    }

    return (
        <div className="container mm-4 mt-5">
            <div className="w-50 row m-auto">
                <div className="">
                    <form onSubmit={onFormSubmit}>
                        <div className="form-group mt-2">
                            <label htmlFor="productName">Product name</label>
                            <input type="text"
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
                            <select name="currency" className="form-control" value={currency} onChange={handleChange}>
                                {props.currency.map((term) =>
                                    <option value={term}>{term}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="sales">Sales</label>
                            <input type="text"
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
                            <label htmlFor="image">Image</label>
                            <input type="text"
                                   className="form-control"
                                   id="image"
                                   name="image"
                                   required
                                   placeholder="Image"
                                   value={image}
                                   onChange={handleChange}
                            />
                        </div>
                        <button id="submit" type="submit" className="btn btn-primary mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductEdit;