import './App.css';
import {Component} from "react";
import Products from "../Products/ProductList/products";
import Header from "../Header/header"
import EShopService from "../../repository/eshopRepository";
import { Routes, Route, useParams, BrowserRouter, Navigate } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    render() {
        return(
            <BrowserRouter>
                <Header/>
                <Routes>
                    {/*<Route path="/books/add" element={<BookAdd categories={this.state.categories}*/}
                    {/*                                           authors={this.state.authors} onAddBook={this.addBook}/>} />*/}
                    {/*<Route path="/books/edit/:id" element={<BookEdit categories={this.state.categories}*/}
                    {/*                                                 authors={this.state.authors}*/}
                    {/*                                                 onEditBook={this.editBook}*/}
                    {/*                                                 book={this.state.selectedBook}/>} />*/}
                    <Route path="/" element={<Products products={this.state.products}
                                                    // onDelete={this.deleteBook}
                                                    // onEdit={this.getBook}
                                                    // mark={this.markBook}
                    />} />
                    {/*<Route path="/categories" element={<Categories categories={this.state.categories} />}/>*/}
                    {/*<Route path="/authors" element={<Authors authors={this.state.authors} />}/>*/}
                    {/*<Navigate to={"/books"}/>*/}
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

    componentDidMount() {
        this.loadProducts();
    }
}

export default App;
