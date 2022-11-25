import React from "react";
import './App.css';
import NotFound from "./NotFound/NotFound";
import Car2 from "./Car2/Car2";
import Menu from "./Menu/Menu";
import {StyleRoot} from "radium";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";
import Car3 from "./Car3/Car3";
import withRouter from "./hoc/withRouter";

export const ClickedContext = React.createContext(false);
export const FunctionsContext = React.createContext({});

class App2 extends React.Component {

    state = {
        cars: [
            {
                id: 1,
                name: 'Ford',
                year: 2013,
                classes: {
                    car: {
                        color: 'color-blue',
                        backgroundColor: 'bg-color-red'
                    },
                    input: {
                        borderColor: 'border-default'
                    }
                },
            },
            {
                id: 2,
                name: 'BWM',
                year: 2014,
                classes: {
                    car: {
                        color: 'color-red',
                        backgroundColor: 'bg-color-blue'
                    },
                    input: {
                        borderColor: 'border-default'
                    }
                },
            }
        ],
        pageTitle: 'React Components',
        showCars: true,
        clicked: false,
    }

    changePageTitle = (val) => {
        //const prevState = {...this.state};
        const prevState = JSON.parse(JSON.stringify(this.state));

        prevState.pageTitle = 'React Components (Changed from button)';

        console.log(val);

        const title = `React Component (Changed from ${val} component)`;

        // this.setState(prevState);
        this.setState({...this.state, pageTitle: title});
    }

    changePageTitleHandler = (val, event) => {
        //console.log(event);
        //console.log(val);
        this.setState({...this.state, pageTitle: event.target.value});
    }

    deleteCarItem = (index) => {
        const prevState = JSON.parse(JSON.stringify(this.state));

        prevState.cars.splice(index, 1);

        //if (this.state.cars[index]) {
        this.setState(prevState);
        //}
    }

    showCars = () => {
        //console.log(event);
        //console.log(val);
        this.setState({...this.state, showCars: !this.state.showCars});
    }

    changeCarTitle = (id, event) => {
        const prevState = JSON.parse(JSON.stringify(this.state));
        const carIndex = prevState.cars.findIndex(car => car.id === id);
        const car = prevState.cars[carIndex];
        const value = event.target.value;

        car.name = value;

        car.classes.car.color = value === 'ford' ? 'color-blue' : 'color-red'
        car.classes.car.backgroundColor = value === 'ford' ? 'bg-color-red' : 'bg-color-blue'

        car.classes.input.borderColor = value.trim() !== '' ? 'border-color-green' : 'border-color-red'

        this.setState(prevState);
    }

    goToHomePage = () => {
        this.props.router.navigate('/')
    }

    render() {
        const AppStyles = {
            backgroundColor: 'greenyellow',
            borderRadius: '5px'
        }

        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => (
                    <ErrorBoundary key={index}>
                        <NotFound
                            name={car.name}
                            year={car.year}
                            classes={car.classes}
                            changePageTitle={this.changePageTitle.bind(this, car.name)}
                            changeCarTitle={this.changeCarTitle.bind(this, car.id)}
                            deleteCarItem={event => this.deleteCarItem(index)}
                        />
                    </ErrorBoundary>
                )
            )
        }

        return (
            // Inline styles
            <FunctionsContext.Provider value={{
                goToHomePage: this.goToHomePage
            }}>
                <div className="App" style={AppStyles}>
                    <Menu/>

                    <h1>{this.state.pageTitle}</h1>

                    <input type="text" onChange={this.changePageTitleHandler.bind(this, 'Value...')}/>
                    <input type="text" onChange={(event) => this.changePageTitleHandler('Value...', event)}/>

                    <h2 style={{color: 'blue', fontSize: '28px'}}>Hello React (h1)</h2>
                    <h3>Hello React (h2)</h3>
                    <p>Description for titles (h1, h2)</p>

                    <button onClick={this.changePageTitle}>Change page title</button>
                    <button onClick={this.showCars}>Toggle Cars</button>

                    {/*<NotFound name="BMW 528" changePageTitle={() => this.changePageTitle('BMW 528')} year={2017}/>*/}
                    {/*<NotFound name={'Mazda 3'} changePageTitle={this.changePageTitle} year={2020}/>*/}
                    {/*<NotFound changePageTitle={this.changePageTitle}>*/}
                    {/*    <strong>*/}
                    {/*        Lexus LS 500 (Children)*/}
                    {/*    </strong>*/}
                    {/*</NotFound>*/}
                    <div className='cars'>
                        <div className='cars-container container'>
                            <div className='cars-body'>
                                {
                                    cars
                                    // this.state.showCars ? cars : <div>Cars are hidden</div>
                                    // <=>
                                    // this.state.cars.map((car, index) => (
                                    //         <NotFound name={car.name} year={car.year} key={index}/>
                                    //     )
                                    // )
                                    // =>
                                    // [<NotFound name={car.name} year={car.year} key={index}/>, <NotFound name={car.name} year={car.year} key={index}/>]
                                }
                            </div>
                        </div>
                    </div>
                    <ErrorBoundary>
                        <StyleRoot>
                            {
                                this.state.showCars ? <Car2 title2='NotFound 2.1 Title' title3={'NotFound 3.1 Title'}/> : null
                            }
                        </StyleRoot>
                    </ErrorBoundary>
                    <ClickedContext.Provider value={this.state.clicked}>
                        <Counter/>
                    </ClickedContext.Provider>
                    <Car3 title={'NotFound 3 title from props'}/>
                    <button onClick={() => this.setState({...this.state, clicked: true})}>Click</button>
                </div>
            </FunctionsContext.Provider>
            // =>
            // <>
            //     <h1>Hello React (h1)</h1>
            //     <h2>Hello React (h2)</h2>
            //     <p>Description for titles (h1, h2)</p>
            // </>
        );
        // =>
        // return React.createElement(
        //     'div',
        //     {
        //         className: 'App'
        //     },
        //     React.createElement(
        //         'h1',
        //         null,
        //         'Hello React'
        //     )
        // );
    }
}

export default withRouter(App2)