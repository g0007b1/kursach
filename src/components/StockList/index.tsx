import {Value} from "../Value";
import React from "react";

type PropsType = {
    values:Array<string>
}

export const StockList:React.FC<PropsType> = (props) => {
    let arrayOfStocks = props.values.map((value:any) => <Value key={value} value={value}/>)
    return (
        <div>
            {arrayOfStocks}
        </div>
    )
}