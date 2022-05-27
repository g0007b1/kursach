import {MemoValue} from "./Value";
import React, {FC} from "react";

type Props = {
    values: string[],
    deleteValue: (index: number) => void
}

export const StockList: FC<Props> = ({values, deleteValue}) => {
    let arrayOfStocks = values.map((value, index) => {return (<MemoValue key={index} value={value} index={index}
                                                                 deleteValue={deleteValue}/>) })
    return (
        <div className='stock-list'>
            {arrayOfStocks}
        </div>
    )
}