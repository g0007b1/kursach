import React, {FC} from "react";

const Stocks = ['DSKY', 'SBER', 'GAZP', 'TCSG', 'YNDX', 'LENT', 'SVET', 'AFLT', 'QIWI']

type Props = {
    setValue: (value:string) => void
}

export const SuggestedStocks: FC<Props> = ({setValue}) => {
    const suggestedStocksArray = Stocks.map(stock => <p key={stock} onClick={() => {setValue(stock)}}
                                                             className={'suggested-stock'}>{stock}</p>)
    return (
        <div className={'suggested-stock__array'}>
            {suggestedStocksArray}
        </div>
    )
}

