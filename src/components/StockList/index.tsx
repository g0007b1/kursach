import {Value} from "../Value";
import React, {FC} from "react";

type PropsType = {
    values: string[],
    deleteValue: (index: number) => void
}

export const StockList: FC<PropsType> = ({values, deleteValue}) => {
    let arrayOfStocks = values.map((value, index) => <Value key={index} value={value} index={index}
                                                                 deleteValue={deleteValue}/>)
    return (
        <div className='stock-list'>
            {arrayOfStocks}
        </div>
    )
}