import axios from "../custom-axios/axios";

const EShopService = {
    fetchProducts: () => {
        return axios.get("/product");
    }
}

export default EShopService;