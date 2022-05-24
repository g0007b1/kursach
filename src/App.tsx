import React from 'react';
import './App.css';
import {useStockValues} from "./hooks/useStockValues";
import {StockForm} from "./components/StockForm";
import {StockList} from "./components/StockList";

function App() {
    const {values, addValue, deleteValue} = useStockValues([])
    const addValueFun = (text: string) => {
        if (text.length > 0) {
            addValue(text);
        }
    }
    return (
        <div className="App">
            <div className='Main'>
                <div>
                    <h1>Узнай цену акции!</h1>
                    <StockForm addValue={addValueFun}/>
                    <StockList values={values} deleteValue={deleteValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
