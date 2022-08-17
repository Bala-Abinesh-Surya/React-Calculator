import React from "react"

export default function Bottom(){
    const [text, setText] = React.useState("0")
    const operators = ["+", "-", "*", "/", "%"]

    // checking if the input contains any text 2
    function inputIsNotEmpty(){
        if((text == "") || (text == undefined) || (text == "0")){
            return false
        }
        else if(text.charAt(0) == "A"){
            setText(old => old.slice(5))
            return true
        }

        return true
    }

    // clearing the input text completely
    function clearInputField(){
        setText("0")
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

    // function to check if any operator is present in the text
    function isOperatorsPresent(){
        let once = false
        for(let i = 0; i < text.length; i++){
            let x = text.charAt(i)
            if(i > 0){
                if(operators.includes(x)){
                    once = true
                    break
                }
            }
        }

        return once
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
            if(isOperatorsPresent()){
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
            if(isOperatorsPresent()){
                // going through each and every character of the text and checking if it is an operator
                for(let i = 0; i < text.length; i++){
                    if(operators.includes(text.charAt(i))){
                        let array = text.split(text.charAt(i))
                        
                        if(array[1] == ""){
                            // user entered only one operand and an operator
                            // like, 9+
                            setText(`Ans: ${array[0]}`)
                        }
                        else{
                            // actual equating
                            switch(text.charAt(i)){
                                case "+":{
                                    setText(`Ans: ${parseInt(array[0]) + parseInt(array[1])}`)
                                    break
                                }
                                case "-":{
                                    setText(`Ans: ${parseInt(array[0]) - parseInt(array[1])}`)
                                    break
                                }
                                case "*":{
                                    setText(`Ans: ${parseInt(array[0]) * parseInt(array[1])}`)
                                    break
                                }
                                case "/":{
                                    setText(`Ans: ${parseInt(array[0]) / parseInt(array[1])}`)
                                    break
                                }
                            }
                        }

                        break
                    }
                }
            }
            else{
                // no operator is entered
                // so displaying the present text as the answer
                setText(`Ans: ${text}`)
            }
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