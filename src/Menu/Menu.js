// Simple component

import React from "react";
import './Menu.css';
import Radium from "radium";
import PropTypes from 'prop-types'
import {Routes, Route, Switch, NavLink, Redirect} from "react-router-dom";
import Car from "../Car/Car";
import Car3 from "../Car3/Car3";
import Counter from "../Counter/Counter";
import Cars from "../Cars/Cars";
import NotFound from "../NotFound/NotFound";
// import NavLink from "./NavLink";

// export default function Car() {
//     return (
//         <div>
//             Car Component
//         </div>
//     )
// }

// =>

// const Car = () => (
//     <div>Car Component</div>
// )

// =>

// const Car = () => <div>Car Component</div>
// export default Car;

// =>
// JavaScript is inside of JSX
const Menu = props => {

    return (
        <>
            <nav>
                {/*<a href="/">Home</a>*/}
                {/*<a href="/about">About</a>*/}
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to={{
                    pathname: '/cars',
                    search: '?color=grey,blue&size=big',
                    hash: 'title',
                }} end>Cars</NavLink>
            </nav>
            {/*<Switch>*/}
            {/*    <Route path="/" render={() => <h1>Home page</h1>} />*/}
            {/*</Switch>*/}
            <Routes>
                {/*404 page - if there aren't matches with url*/}
                <Route path="*" element={<NotFound/>}/>

                <Route path="/" element={<Car3 title={'Car 3 title from props'}/>}/>
                <Route path="/about" element={<Counter/>}/>
                <Route path="/cars" element={<Cars/>}/>
                <Route path="/cars/:slug" element={<Cars/>}/>
            </Routes>
            {/*<Route path="/" render={() => <h1>Home page</h1>}/>*/}
        </>
    );
}

export default Menu