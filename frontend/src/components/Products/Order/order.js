import React, {useEffect} from "react";
import orderAxios from "../../../custom-axios/orderAxios";

const Order = (props) => {

    const [formData, updateFormData] = React.useState({})


    useEffect(()=>{
        loadOrder();
    },[]);

    const onFormSubmit = async (e) => {
        e.preventDefault();

        // await orderAxios.post(`/order/addToOrder`,{
        //     "id": id,
        //     "name": productName,
        //     "amount": amount,
        //     "currency": currency,
        //     "sales": sales,
        //     "image": image,
        //     "quantity": quantity
        // });
        window.location.href = "/";
    }

    const loadOrder = async () => {
        const result =await orderAxios.get(`/order/`);
        console.log(result.data)
        updateFormData(result.data)
    }

    return (
        <div className="container mm-4 mt-5">
            <div className="row mt-5">
                <div className="col-md-5">
                    <h3>Current order</h3>
                    <div>{formData.orderState}</div>
                    <form onSubmit={onFormSubmit}>
                        <table className={"table table-striped"}>
                            <thead>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Image</th>
                            <th scope={"col"}>Price</th>
                            <th scope={"col"}>Currency</th>
                            <th scope={"col"}>Sales</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>item</td>
                            </tr>
                            <tr>
                                <td>item</td>
                            </tr>
                            <tr>
                                <td>item</td>
                            </tr>

                            {/*{formData.orderItemList.map((term) => {*/}
                            {/*    return (*/}
                            {/*        <tr>*/}
                            {/*            <td className={"col"}>{term.productId}</td>*/}
                            {/*            <td className={"col"}></td>*/}
                            {/*            <td className={"col"}></td>*/}
                            {/*            <td className={"col"}></td>*/}
                            {/*            <td className={"col"}></td>*/}

                            {/*        </tr>*/}
                            {/*    )*/}
                            {/*})}*/}
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