import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import {SuggestedStocks} from "./SuggestedStocks";

type Props = {
    addValue: (value: string) => void
}

export const StockForm: FC<Props> = ({addValue}) => {
    const [value, setValue] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value.toUpperCase())
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addValue(value);
        setValue('')
    }

    return (
        <div>

            <form onSubmit={handleSubmit} className='form'>
                <SuggestedStocks setValue={setValue}/>
                <input placeholder='... или введите любой другой тикер' onChange={onInputChange} value={value}
                       className='form__input'/>
            </form>
        </div>
    )
}