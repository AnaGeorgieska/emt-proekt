import React from "react";

const productTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.productName}</td>
            <td scope={"col"}>{props.term.price.amount}</td>
            <td scope={"col"}>{props.term.price.currency}</td>
            <td scope={"col"}>{props.term.sales}</td>
        </tr>
    )
}

export default productTerm;