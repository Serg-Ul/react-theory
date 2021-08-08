import React from 'react';
import './App.css';
import {Component} from "react/cjs/react.production.min";
import Car from "./Car/Car";


class App extends Component {

    state = {
        cars: [
            {
                brand: 'Ford',
                year: 2015,
                color: 'red',
            },
            {
                brand: 'Lexus',
                year: 2017,
                color: 'blue',
            }
        ],
        pageTitle: 'Cars:'
    };

    titleHandler = () => {
        //this.state.pageTitle = 'Cars components:'
        console.log('success');
    };

    render() {

        const cars = this.state.cars;

        return (
            <div className="App">
                <header className="App-header" style={{
                    textAlign: 'center',
                    fontSize: '18px',
                }}>
                    <h1>{this.state.pageTitle}</h1>
                    <button onClick={this.titleHandler} style={{margin: '10px 0px', fontSize: '20px', backgroundColor: 'grey'}}>Change the page title</button>
                    <Car brand={cars[0].brand} year={cars[0].year}>
                        <p style={{color: cars[0].color}}>Color: {cars[0].color}</p>
                    </Car>
                    <Car brand={cars[1].brand} year={cars[1].year}>
                        <p style={{color: cars[1].color}}>Color: {cars[1].color}</p>
                    </Car>
                </header>
            </div>
        );
    }

    // <= JSX =>

    // return React.createElement(
    //     'div',
    //     {
    //         className: 'App',
    //     },
    //     'Any text',
    //     React.createElement(
    //         'header',
    //         {
    //             className: 'App-header',
    //         },
    //         React.createElement(
    //             'h1',
    //             {
    //                 className: 'App-h1',
    //             },
    //             'Any h1 text'
    //         )
    //     )
    // );
}

export default App;
