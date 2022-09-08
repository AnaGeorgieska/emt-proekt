import axios from "../custom-axios/axios";

const EShopService = {
    fetchProducts: () => {
        return axios.get("/product");
    },
    fetchCurrency: () => {
        return axios.get("/product/currency");
    },
    getProduct: (id) => {
        return axios.get(`/product/${id}`);
    },
    addProduct: (productName, amount, currency, sales, image) => {
        return axios.post("/product/add", {
            "productName": productName,
            "amount": amount,
            "currency": currency,
            "sales": sales,
            "image": image
        })
    },
    editProduct: (id, productName, amount, currency, sales, image) => {
        return axios.put(`/product/edit/${id}`,{
            "productName": productName,
            "amount": amount,
            "currency": currency,
            "sales": sales,
            "image": image
        })
    }

}

export default EShopService;