import React, {ChangeEvent, useState} from "react";

type PropsType = {
    addValue: (value: any) => void
}

export const StockForm: React.FC<PropsType> = ({addValue}) => {
    const [value, setValue] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            addValue(value);
            setValue('')
        }}>
            <input onChange={onInputChange} value={value}/>
        </form>
    )
}