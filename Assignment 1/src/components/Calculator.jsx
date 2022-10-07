import { useState } from 'react'
import "../App.css"

function Calculator() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [type, setType] = useState("plus");
    const [result, setResult] = useState("");

    const Calc = () => {
        if (type === "plus") {
            setResult(parseFloat(input1) + parseFloat(input2))
        }
        if (type === "minus") {
            setResult(parseFloat(input1) - parseFloat(input2))
        }
        if (type === "multi") {
            setResult(parseFloat(input1) * parseFloat(input2))
        }
        if (type === "divide") {
            setResult(parseFloat(input1) / parseFloat(input2))
        }
    }

    return (
        <div>
            <form>
                <input type="number" id='input1' onChange={(e) => setInput1(e.target.value)}></input>
                <select onChange={(e) => setType(e.target.value)} id="eu">

                    <option type="string" value="plus">+</option>
                    <option type="string" value="minus">-</option>
                    <option type="string" value="multi">*</option>
                    <option type="string" value="divide">/</option>
                </select>
                <input type="number" id='input2' onChange={(e) => setInput2(e.target.value)} ></input>
                <button onClick={Calc} type="button" id="but">
                    result
                </button>
                <div className='result' id="texta">
                    <b>{result}</b>
                </div>
            </form>
        </div >
    )

}


export default Calculator

