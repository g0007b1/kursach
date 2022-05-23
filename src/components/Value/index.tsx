import React from "react";

type PropsType = {
    value:any
}

export const Value:React.FC<PropsType> = (props) => {
    return (
        <h1>{props.value}</h1>
    )
}