import {useState} from "react";
import {moexTickerLast} from "../../api";

export const useStockValues = (initialValues: string[]) => {
    const [values, setValues] = useState(initialValues)
    const addValue = (value: string) => {
        moexTickerLast(value)
            .then(res => {
                if (res != null)
                    setValues([...values, `${value} : ${res}р.`])
            })
    }
    const deleteValue = (deleteIndex: number) => {
        const newValues = values.filter((_, index) => index !== deleteIndex);
        setValues(newValues)
    }
    return {
        values,
        addValue,
        deleteValue
    }
}