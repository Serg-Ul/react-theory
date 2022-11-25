import React from "react";
import Title from "../UI/Title/Title";
import {ClickedContext} from "../App2";

export default (props) => {
    return (
        <ClickedContext.Consumer>
            {
                clicked => clicked ? <Title>Counter 2 - Clicked</Title> : null
            }
        </ClickedContext.Consumer>
    )
}