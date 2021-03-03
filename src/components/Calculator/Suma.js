import React, {useState} from "react";
export default function Suma (){
    const [data, setData] = useState({
        num1: "",
        num2: ""
    });
    const [result, setResult] = useState("");
    const handleonClick = () => {
        fetch("http://localhost:9099/add?number1="+ data.num1+ "&number2=" +data.num2)
        .then(response => response.json())
        .then(data => {
                console.log(data)
                setResult(data)
            }
        );
    }
    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    return (
        <div className="container">
            <form>
                <div>
                    <div>
                        <label>
                            Numero 1
                        </label>
                        <input type="number" onChange={handleChange}  name = "num1">
                        </input>
                    </div>
                    <div>
                    <label>
                            Numero 2
                        </label>
                        <input type="number" onChange={handleChange} name = "num2">
                        </input>
                    </div>
                </div>
            </form>
            <button onClick={handleonClick}>
                Resultado
            </button>
            <h3>Resultado: {result} </h3>
        </div>

    )
}