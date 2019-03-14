import React, { Fragment, Component } from 'react'
import SearchBar from './SearchBar'
import '../css/Nav.css';
import { NavLink} from "react-router-dom"
export default class Nav extends Component {
  render() {
    return (
      <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container ">
                    <NavLink className="navbar-brand" to="/"><img src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png" alt="the logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav d-flex  w-100">
                        <li className="nav-item active mr-3">
                            <SearchBar />
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">MP3
                                <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/">NEWS</NavLink>
                        </li>
                        <li className="nav-item ">
                        <NavLink className="nav-link" to="/">TV</NavLink>
                        </li>
                        <li className="nav-item  active signin "  >
                            <NavLink className=" nav-link" style={{ borderRadius:"17px"  ,  backgroundImage: "linear-gradient(to right, #efadb1, #a265a8 42%, #4d4ea0)" }} to="/signin">SignIn/SignUp</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
      </Fragment>
    )
  }
}

