import React from "react"

export default function Bottom(){
    const [text, setText] = React.useState("0")
    const operators = ["+", "-", "*", "/", "%"]

    // checking if the input contains any text or not
    function inputIsNotEmpty(){
        if((text == "") || (text == undefined) || (text == "0")){
            return false
        }

        return true
    }

    // clearing the input text completely
    function clearInputField(){
        // if contains anything, clearing the text field
        // else, do nothing
        if(inputIsNotEmpty()){
            setText("0")
        }
    }

    // clearing the last character
    function backButton(){
        // if contains anything, clearing the last character
        // else, do nothing
        if(inputIsNotEmpty()){
            setText(function(text){
                return text.slice(0, text.length - 1)
            })
        }
    }

    // adding the numbers to the input column
    function numbersInput(text){
        if(inputIsNotEmpty()){
            // input text contains something already
            // so adding the current number with the previous text
            setText(old => old + text)
        }
        else{
            setText(text)
        }
    }

    // adding the operators to the input column
    function operatorsInput(operator){
        // if the input column is empty or contains only zero
            // showing an alert that 'Enter some digits first'
        // else
            // adding the operator to the already existing text
        if(inputIsNotEmpty()){
            // now checking if the last character is an operator
            // if(operators.includes(text.charAt(text.length - 1))){
            //     alert("Two operators don't come together")
            // }
            // else{
            //     setText(old => old + operator)
            // }

            // as of now only one operation is supported
            let once = false
            for(let i = 0; i < text.length; i++){
                let x = text.charAt(i)
                if(operators.includes(x)){
                    once = true
                    break
                }
            }

            if(once){
                alert('Only one operation is supported!')
            }
            else{
                setText(old => old + operator)
            }
        }
        else{
            alert('Enter some digit first!')
            setText("0")
        }
    }

    // function to show non-functional alert
    function nonFunctional(){
        alert('Non functional bro!')
    }

    // function to evaluate the answers
    function equate(){
        if(inputIsNotEmpty()){

        }
        else{
            alert('Enter something first!')
        }
    }

    return (
        <div className="calci-div">
            <input type={"text"} placeholder={"0"} value={text}/>
            <div>
                <table>
                    <tr>
                        <td>
                            <button onClick={() => operatorsInput("%")}>%</button>
                        </td>
                        <td>
                            <button style={{backgroundColor: "red"}} onClick={() => clearInputField()}>CE</button>
                        </td>
                        <td>
                            <button onClick={backButton}>C</button>
                        </td>
                        <td>
                            <button onClick={() => operatorsInput("/")}>{"/"}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => numbersInput("7")}>7</button>
                        </td>
                        <td>
                            <button onClick={() => numbersInput("8")}>8</button>
                        </td>
                        <td>
                            <button onClick={() => numbersInput("9")}>9</button>
                        </td>
                        <td>
                            <button onClick={() => operatorsInput("*")}>{"*"}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => numbersInput("4")}>4</button>
                        </td>
                        <td>
                            <button onClick={() => numbersInput("5")}>5</button>
                        </td>
                        <td>
                            <button onClick={() => numbersInput("6")}>6</button>
                        </td>
                        <td>
                            <button onClick={() => operatorsInput("-")}>{"-"}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => numbersInput("1")}>1</button>
                        </td>
                        <td>
                            <button onClick={() => numbersInput("2")}>2</button>
                        </td>
                        <td>
                            <button onClick={() => numbersInput("3")}>3</button>
                        </td>
                        <td>
                            <button onClick={() => operatorsInput("+")}>{"+"}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={nonFunctional}>+/-</button>
                        </td>
                        <td>
                            <button onClick={() => numbersInput("0")}>0</button>
                        </td>
                        <td>
                            <button onClick={nonFunctional}>.</button>
                        </td>
                        <td>
                            <button onClick={equate}>=</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}