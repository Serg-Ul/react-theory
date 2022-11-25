import Car from "../Car/Car";
import {carsArray} from "../dataArrays/dataArrays";
import {useEffect, useState} from "react";
import {FunctionsContext} from "../App2";
import withRouter from '../hoc/withRouter'
import _ from 'lodash'
import {useNavigate, useParams} from "react-router-dom";

function Cars(props) {

    const { slug } = useParams();
    const navigate = useNavigate()

    const [cars, setCars] = useState(carsArray)

    useEffect(() => {
        navigate('/')
    }, [])

    const deleteCarItem = (index) => {
        const prevCars = JSON.parse(JSON.stringify(cars));

        prevCars.splice(index, 1);

        //if (this.state.cars[index]) {
        setCars(prevCars);
        //}
    }

    const changeCarTitle = (id, event) => {
        const prevCars = JSON.parse(JSON.stringify(cars));
        const carIndex = prevCars.findIndex(car => car.id === id);
        const car = prevCars[carIndex];
        const value = event.target.value;

        car.name = value;

        car.classes.car.color = value === 'ford' ? 'color-blue' : 'color-red'
        car.classes.car.backgroundColor = value === 'ford' ? 'bg-color-red' : 'bg-color-blue'

        car.classes.input.borderColor = value.trim() !== '' ? 'border-color-green' : 'border-color-red'

        setCars(prevCars);
    }

    const getCarBySlug = ({goToHomePage}) => {

        const car = cars.find(item => item.slug === slug)

        return (
            <div className="cars">
                <div className="cars-container">
                    <div className="cars-body">
                        {
                            !_.isEmpty(car)
                                ? (
                                    <Car
                                        key={car.id}
                                        deleteCarItem={deleteCarItem}
                                        changeCarTitle={changeCarTitle}
                                        {...car}
                                    />
                                )
                                : (
                                    <>
                                        {
                                            cars.map(car => <Car
                                                key={car.id}
                                                deleteCarItem={deleteCarItem}
                                                changeCarTitle={changeCarTitle}
                                                {...car}
                                            />)
                                        }
                                        <button type="button" onClick={() => goToHomePage(props)}>Go to homepage</button>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <FunctionsContext.Consumer>
            {
                functions => getCarBySlug(functions)
            }
        </FunctionsContext.Consumer>
    );
}

export default withRouter(Cars);
