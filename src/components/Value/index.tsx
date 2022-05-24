import React, {FC} from "react";

type PropsType = {
    value: string,
    deleteValue: (index: number) => void,
    index: number
}

export const Value: FC<PropsType> = ({value, deleteValue, index}) => {
    return (
        <div className='value'>
            <h1>{value}</h1>
            <button onClick={() => deleteValue(index)} className='delete_button'>X</button>
        </div>
    )
}