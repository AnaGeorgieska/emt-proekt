import './App.css';
import {Component} from "react";
import Products from "../Products/ProductList/products";
import Header from "../Header/header"
import EShopService from "../../repository/eshopRepository";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductAdd from "../Products/ProductAdd/productAdd";
import ProductEdit from "../Products/ProductEdit/productEdit";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currency: [],
            selectedProduct: {}
        }
    }

    render() {
        return(
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/product/add" element={<ProductAdd currency={this.state.currency}
                                                                onAddBook={this.addProduct}/>} />
                    <Route path="/product/edit/:id" element={<ProductEdit currency={this.state.currency}
                                                                     onEditProduct={this.editProduct}
                                                                     product={this.state.selectedProduct}/>} />
                    <Route path="/" element={<Products products={this.state.products}/>}/>

                </Routes>
            </BrowserRouter>
        )
    }

    loadProducts = () => {
        EShopService.fetchProducts()
            .then((data)=>{
                this.setState({
                    products: data.data
                })
            });
    }
    loadCurrency = () => {
        EShopService.fetchCurrency()
            .then((data) => {
                this.setState({
                    currency: data.data
                })
            })
    }
    addProduct = (productName, amount, currency, sales, image) => {
        EShopService.addProduct(productName, amount, currency, sales, image)
            .then(() => {
                this.loadProducts();
            })
    }
    editProduct = (id, productName, amount, currency, sales, image) => {
        EShopService.editProduct(id, productName, amount, currency, sales, image)
            .then(() => {
                this.loadProducts();
            })
    }

    componentDidMount() {
        this.loadProducts();
        this.loadCurrency();
    }
}

export default App;
