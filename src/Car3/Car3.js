// Stateful component - class Component

import React from "react";
import classes from './Car3.module.scss';
import styles from 'styled-components';
import withClass from '../hoc/withClass'

const Title = styles.h1`
    color: #ffffff;
`;

class Car3 extends React.Component {

    state = {
        title: 'Car 3 Title'
    }

    constructor() {
        super();

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {

        return (
            <>
                <Title>{this.state.title}</Title>
                <Title>{this.props.title}</Title>
                <input ref={this.inputRef} type="text"/>
            </>
        )
    }
}

export default withClass(Car3, 'wrapper')