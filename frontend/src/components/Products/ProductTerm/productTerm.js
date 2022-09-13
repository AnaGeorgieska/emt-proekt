import React from "react";
import {Link} from "react-router-dom";

const productTerm = (props) => {
    return (
        <tr>
            <td className={"col"}>{props.term.productName}</td>
            <td className={"col"}><img src={props.term.image} alt={"productItem"} style={{height: "70px"}}/></td>
            <td className={"col"}>{props.term.price.amount}</td>
            <td className={"col"}>{props.term.price.currency}</td>
            <td className={"col"}>{props.term.sales}</td>
            <td className={"col text-right"}>
                <Link className={"btn btn-info mx-2"}
                    // onClick={()=>props.onEdit(props.term.id)}
                      to={`/product/edit/${props.term.id.id}`}>
                    Edit
                </Link>
            </td>
            <td className={"col text-right"}>
                <Link className={"btn btn-secondary mx-2"}
                      to={`/product/addToOrder/${props.term.id.id}`}>
                    Add to Order
                </Link>
            </td>
        </tr>
    )
}

export default productTerm;