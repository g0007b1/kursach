import React, {Dispatch, FC, SetStateAction} from "react";

const Stocks = ['DSKY', 'SBER', 'GAZP', 'TCSG', 'YNDX', 'LENT', 'SVET', 'AFLT', 'QIWI']

type Props = {
    setValue: Dispatch<SetStateAction<string>>
}

export const SuggestedStocks: FC<Props> = ({setValue}) => {

    const suggestedStocksArray = Stocks.map(stock => <button key={stock} onClick={() => setValue(stock)}
                                                             className={'suggested-stock'}>{stock}</button>)
    return (
        <div>
            {suggestedStocksArray}
        </div>
    )
}

