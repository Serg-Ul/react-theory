// Simple component

import React from "react";
import Radium from "radium";
import PropTypes from "prop-types"
// import './Car2.scss';
import classes from './Car2.module.scss';
import styles from 'styled-components';

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

const Title = styles.h1`
    color: #ffffff;
`;

class Car2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            prevTitle: 'Prev Car 2 Title',
            title: 'Car 2 Title'
        }

        console.log(this.state)
    }

    // state = {
    //     title: 'Car 2 Title'
    // }

    // LifeCycles
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('Component will receive props', nextProps)
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Component should update', nextProps, nextState)

        //return !!nextProps.name
        //console.log(nextProps)

        return nextProps.title2.trim() !== this.props.title2.trim()

        //return true
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('Component will update', nextProps, nextState)
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update', prevProps, prevState)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
    }

    // After this cycle the componentWillUnmount method is called as well
    // componentWillMount() {
    //     console.log('Component will mount')
    // }
    // =>
    // ^16.3, instead of componentWillUpdate and componentWillReceiveProps
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps', nextProps, prevState)

        return {
            ...prevState,
            title: 'New title Car 2'
        }
    }

    componentDidMount() {
        console.log('Component mounted', this.state)

        //throw new Error('Error message...')
    }

    componentWillUnmount() {
        console.log('Component will unmount')
    }

    render() {
        console.log('Rendered')

        const styles = {
            width: '100px',
            height: '100px',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover': {
                cursor: 'pointer'
            },

            '@media screen and (max-width: 1024px)': {
                width: '150px',
                height: '150px',
            },
        }

        return (
            // <div className='car-2' style={styles}>
            //     <div className='car-2-title'>Car2</div>
            // </div>
            <div className={classes['car-2']} style={styles}>
                <Title>{this.state.title}</Title>
                <div className={classes['car-2-title']}>{this.props.title2}</div>
            </div>
        )
    }
}

Car2.propTypes = {
    title2: PropTypes.string.isRequired,
    title3: PropTypes.string,
}

export default Radium(Car2)