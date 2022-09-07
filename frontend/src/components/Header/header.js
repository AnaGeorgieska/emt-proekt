import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../resources/logo-diamond-shop.png'

const header = (props) => {
    return (
        <header>

            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-secondary">
                <a className="navbar-brand" href="/">Diamond Shop Application</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/"}>Products</Link>
                        </li>
                        {/*<li className="nav-item active">*/}
                        {/*    <Link className="nav-link" to={"/categories"}>Categories</Link>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item active">*/}
                        {/*    <Link className="nav-link" to={"/authors"}>Authors</Link>*/}
                        {/*</li>*/}
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        <Link className="btn btn-outline-info my-2 my-sm-0" to={"/login"}>Login</Link>
                    </form>
                </div>
            </nav>
            <div className=" container-fluid">
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm">
                    <div className="container">
                        <ul className="nav navbar-nav flex-fill justify-content-center">
                            <li className="nav-item">
                                <img className="center-block d-block mx-auto" style={{height: "70px"}} alt={"logo"} src={logo}/>
                            </li>
                        </ul>
                        <ul className="nav pull-right">

                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    )
}
export default header;