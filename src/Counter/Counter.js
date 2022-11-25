import React from "react";
import Title from "../UI/Title/Title";
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends React.Component {
    state = {
        counter: 0,
    }

    increaseCounter = (id, event) => {
        //console.log(id)
        //console.log(event)

        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // =>
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    decreaseCounter = () => {
        // this.setState({
        //     counter: this.state.counter - 1
        // })
        // =>
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    render() {
        console.log(this.props)

        return (
            // React fragment => or <React.Fragment>...</React.Fragment>
            <Auxiliary>
                <Title>
                    {
                        this.state.counter
                    }
                </Title>
                <Counter2/>
                <button onClick={this.increaseCounter.bind(this, 1)}>+</button>
                <button onClick={this.decreaseCounter}>-</button>
            </Auxiliary>
        )
    }
}