import React from "react";
import ProductTerm from "../ProductTerm/productTerm";

const products = (props) => {
    return (
      <div className={"container mm-4 mt-5"}>
          <div className={"row"}>
              <div className={"row"}>
                  <table className={"table table-striped"}>
                      <thead>
                      <th scope={"col"}>Name</th>
                      <th scope={"col"}>Price</th>
                      <th scope={"col"}>Currency</th>
                      <th scope={"col"}>Sales</th>
                      </thead>
                      <tbody>
                      {props.products.map((term) => {
                          return (
                              <ProductTerm term={term}/>
                          )
                      })}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    );
}

export default products;