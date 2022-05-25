import React, {ChangeEvent, FC, FormEvent, useState} from "react";

type PropsType = {
    addValue: (value: string) => void | number
}

export const StockForm: FC<PropsType> = ({addValue}) => {
    const [value, setValue] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value.toUpperCase())
    }
    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addValue(value);
        setValue('')
    }
    return (
        <form onSubmit={submit} className='form'>
            <input placeholder='Введите тикер (например GAZP, SBER)' onChange={onInputChange} value={value}
                   className='form__input'/>
        </form>
    )
}