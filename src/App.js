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
        pageTitle: 'Cars:',
        isShowed: true,
    };

    onChangeTitle = (title) => {
        this.setState({
            pageTitle: title
        });
    };

    toggleCarsHandler = () => {
        this.setState({
            isShowed: !this.state.isShowed
        })
        //console.log(this.state.isShowed);
    }

    onChangeBrand = (brand, index) => {
        const car = this.state.cars[index];
        car.brand = brand;

        const cars = [
            ...this.state.cars
        ]

        this.setState({
            cars
        });
    }

    onDeleteCar(index) {
        const cars = this.state.cars.filter((car, i) => i !== index);
        this.setState({
            cars
        });
    }

    render() {

        const cars = this.state.cars;

        // let showedCars = (
        //     <div>Not yet posts</div>
        // );
        //
        // if (this.state.isShowed) {
        //     showedCars = cars.map((car, index) => (
        //             <Car
        //                 key={index}
        //                 brand={car.brand}
        //                 year={car.year}
        //                 onChangeTitle={this.titleHandler.bind(this, 'Cars component: ' + car.brand)}
        //             >
        //                 <p style={{color: car.color}}>Color: {car.color}</p>
        //             </Car>
        //         )
        //     )
        // }
        // or

        return (
            <div className="App">
                <header className="App-header" style={{
                    textAlign: 'center',
                    fontSize: '18px',
                }}>
                    <h1>{this.state.pageTitle}</h1>
                    <button onClick={this.onChangeTitle.bind(this, 'Cars components:')}
                            style={{margin: '10px 0px', fontSize: '20px', backgroundColor: 'grey'}}>Change the page
                        title
                    </button>
                    <button onClick={this.toggleCarsHandler}
                            style={{margin: '10px 10px', fontSize: '20px', backgroundColor: 'grey'}}>Toggle cars
                    </button>
                    {
                        this.state.isShowed
                            ? cars.map((car, index) => (
                                    <Car
                                        key={index}
                                        index={index}
                                        brand={car.brand}
                                        year={car.year}
                                        onChangeBrand={(event) => {
                                            this.onChangeBrand(event.target.value, index)
                                        }}
                                        onDeleteCar={this.onDeleteCar.bind(this, index)}
                                    >
                                        <p style={{color: car.color}}>Color: {car.color}</p>
                                    </Car>
                                )
                            )
                            : null
                        // showedCars
                    }
                    {/* => */}
                    {/*<Car*/}
                    {/*    brand={cars[0].brand}*/}
                    {/*    year={cars[0].year}*/}
                    {/*    onChangeTitle={this.titleHandler.bind(this, 'Cars component: ' + cars[0].brand)}*/}
                    {/*>*/}
                    {/*    <p style={{color: cars[0].color}}>Color: {cars[0].color}</p>*/}
                    {/*</Car>*/}
                    {/*<Car*/}
                    {/*    brand={cars[1].brand}*/}
                    {/*    year={cars[1].year}*/}
                    {/*    onChangeTitle={() => {*/}
                    {/*        this.titleHandler('Cars component: ' + cars[1].brand);*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <p style={{color: cars[1].color}}>Color: {cars[1].color}</p>*/}
                    {/*</Car>*/}
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
