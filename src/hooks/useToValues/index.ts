import {useState} from "react";
import {moexTickerLast} from "../../api";

export const useToValues = (initialValues: Array<string>) => {
    const [values, setValues] = useState(initialValues)
    return {
        values,
        addValue: (value:any) => {
            moexTickerLast(value)
                .then(res => {
                    setValues([...values, `${value} : ${res}р.`])
                })
        },
        deleteValue: (deleteIndex: number) => {
            const newValues = values.filter((_, index:number) => index !== deleteIndex);
            setValues(newValues)
        }
    }
}