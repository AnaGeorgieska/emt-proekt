import React from "react";

const productTerm = (props) => {
    return (
        <tr>
            <td className={"col"}>{props.term.productName}</td>
            <td className={"col"}><img src={props.term.image} alt={"productItem"} style={{height: "70px"}}/></td>
            <td className={"col"}>{props.term.price.amount}</td>
            <td className={"col"}>{props.term.price.currency}</td>
            <td className={"col"}>{props.term.sales}</td>
        </tr>
    )
}

export default productTerm;