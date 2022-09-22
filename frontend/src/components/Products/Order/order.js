import React, {useEffect} from "react";
import orderAxios from "../../../custom-axios/orderAxios";
import axios from "../../../custom-axios/axios";

const Order = (props) => {

    const [formData, updateFormData] = React.useState({})
    const [total, updateTotal] = React.useState(0)


    useEffect(()=>{
        loadOrder();
    },[]);

    const onFormSubmit = async (e) => {
        e.preventDefault();

        await orderAxios.post(`/order/placeOrder`,{});
        window.location.href = "/";
    }

    var array=[]
    const loadOrder = async () => {
        const result =await orderAxios.get(`/order/`);
        console.log(result.data)
        updateFormData(result.data)
        const total =await orderAxios.get(`/order/total`);
        console.log(total.data)
        updateTotal(total.data)


    }

    return (
        <div className="container mm-4 mt-5">
            <div className="row ">
                <div className="row">
                    <h3>Current order - {formData.orderState}</h3>
                    <form onSubmit={onFormSubmit}>
                        <table className={"table table-striped w-100"}>
                            <thead>
                            <th scope={"col"}>#Number</th>
                            <th scope={"col"}>ProductId</th>
                            <th scope={"col"}>Currency</th>
                            <th scope={"col"}>Amount</th>
                            <th scope={"col"}>Quantity</th>
                            </thead>
                            <tbody>

                            {formData.orderItemList?.map((term, index) => {
                                return (
                                    <tr>
                                        <td className={"col"}>{index+1}</td>
                                        <td className={"col"}>{term.productId.id}</td>
                                        <td className={"col"}>{term.itemPrice.currency}</td>
                                        <td className={"col"}>{term.itemPrice.amount}</td>
                                        <td className={"col"}>{term.quantity}</td>
                                    </tr>
                                )
                            })}
                            <tr><th>Total:</th><th>EUR</th><th>{total}</th><th></th><th></th></tr>
                            </tbody>
                        </table>
                        <button id="submit" type="submit" className="btn btn-primary mt-2">Place order</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order;