// Simple component

import React from "react";
import './Car.css';
import Radium from "radium";
import PropTypes from 'prop-types'
import withRouter from '../hoc/withRouter'

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
const Car = (props) => {
    const car = [
        'car',
        ...Object.values(props.classes.car)
    ].join(' ');

    const input = props.classes.input;

    const styles = {
        div: {
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover': {
                cursor: 'pointer'
            },
        }
    }

    return (
        <div className={car} style={styles.div} onClick={ () => props.router.navigate(`/cars/${props.slug}`) }>
            <div>Car Component <strong> Number: {Math.round(Math.random() * 100)}</strong></div>
            <div>Car name: {props.name}</div>
            <br/>
            <div>Car year: {props.year}</div>
            <br/>
            <div>{props.children}</div>
            {/*<button onClick={changePageTitle}>Click</button>*/}
            <button onClick={props.deleteCarItem}>Delete</button>
            <input type="text" onChange={props.changeCarTitle} className={input.borderColor}/>
        </div>
    )
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    deleteCarItem: PropTypes.func,
    changeCarTitle: PropTypes.func,
}

export default withRouter(Radium(Car))