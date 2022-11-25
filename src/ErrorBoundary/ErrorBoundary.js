import React from "react";
import styles from 'styled-components';
import Title from "../UI/Title/Title";

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
        //console.log(error)

        this.setState({
            hasError: true,
            error,
            errorInfo
        })
    }

    render() {
        return this.state.hasError ? <Title>{`${this.state.error} ${JSON.stringify(this.state.errorInfo)}`}</Title> : this.props.children
    }
}