import React, {useState} from 'react';
import './App.css';
import {useToValues} from "./hooks/useToValues";
import {StockForm} from "./components/StockForm";
import {StockList} from "./components/StockList";

function App() {
    const {values, addValue, deleteValue} = useToValues([])
    return (
        <div className="App">
            <div className='Main'>
                <div>
                    <h1>Узнай цену акции!</h1>
                    <StockForm addValue={(text) => {
                        const trimmedText = text.trim();

                        if (trimmedText.length > 0) {
                            addValue(trimmedText);
                        }
                    }}/>
                    <StockList values={values}/>
                </div>
            </div>
        </div>
    );
}

export default App;
