import React, {FC} from "react";

type Props = {
    value: string,
    deleteValue: (index: number) => void,
    index: number
}

const Value: FC<Props> = ({value, deleteValue, index}) => {
    return (
        <div className='value'>
            <h1>{value}</h1>
            <button onClick={() => deleteValue(index)} className='delete_button'>X</button>
        </div>
    )
}

export const MemoValue = React.memo(Value)