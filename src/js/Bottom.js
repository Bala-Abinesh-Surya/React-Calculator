import React from "react"

export default function Bottom(){
    const [text, setText] = React.useState("0")
    const operators = ["+", "-", "*", "/", "%"]

    function inputIsNotEmpty(){
        if((text == "") || (text == "0")){
            alert('Enter a digit first!')
            setText("0")
            return false
        }

        return true
    }

    // for CE Button
    function handleClickClear(){
        setText("")
    }

    // for operators
    function handleClickModulo(){
        setText(function(oldText){
            if(inputIsNotEmpty()){
                return oldText + "%"
            }
        })
    }

    function handleClickPlus(){
        setText(function(oldText){
            if(inputIsNotEmpty()){
                return oldText + "+"
            }
        })
    }

    function handleClickMinus(){
        setText(function(oldText){
            if(inputIsNotEmpty()){
                return oldText + "-"
            }
        })
    }

    function handleClickMulti(){
        setText(function(oldText){
            if(inputIsNotEmpty()){
                return oldText + "*"
            }
        })
    }

    function handleClickDivide(){
        setText(function(oldText){
            if(inputIsNotEmpty()){
                return oldText + "/"
            }
        })
    }

    // for numbers
    function handleClickOne(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                return "1"
            }
            else{
                return oldText + "1"
            }
        })
    }

    function handleClickTwo(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                return "2"
            }
            else{
                return oldText + "2"
            }
        })
    }

    function handleClickThree(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                return "3"
            }
            else{
                return oldText + "3"
            }
        })
    }

    function handleClickFour(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                return "4"
            }
            else{
                return oldText + "4"
            }
        })
    }

    function handleClickFive(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                return "7"
            }
            else{
                return oldText + "7"
            }
        })
    }

    function handleClickSix(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                return "6"
            }
            else{
                return oldText + "6"
            }
        })
    }

    function handleClickSeven(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                return "7"
            }
            else{
                return oldText + "7"
            }
        })
    }

    function handleClickEight(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                return "8"
            }
            else{
                return oldText + "8"
            }
        })
    }

    function handleClickNine(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                return "9"
            }
            else{
                return oldText + "9"
            }
        })
    }

    function handleClickZero(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                return "0"
            }
            else{
                return oldText + "0"
            }
        })
    }

    // = operator
    function handleClickEquate(){
        setText(function(oldText){
            if((oldText == "") || (oldText == "0")){
                alert('Nothing to equate')
                return("0")
            }
            else{
                return oldText + "7"
            }
        })
    }

    return (
        <div className="calci-div">
            <input type={"text"} placeholder={"0"} value={text}/>
            <div>
                <table>
                    <tr>
                        <td>
                            <button onClick={handleClickModulo}>%</button>
                        </td>
                        <td>
                            <button onClick={handleClickClear}>CE</button>
                        </td>
                        <td>
                            <button>C</button>
                        </td>
                        <td>
                            <button onClick={handleClickDivide}>{"/"}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleClickSeven}>7</button>
                        </td>
                        <td>
                            <button onClick={handleClickEight}>8</button>
                        </td>
                        <td>
                            <button onClick={handleClickNine}>9</button>
                        </td>
                        <td>
                            <button onClick={handleClickMulti}>{"*"}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleClickFour}>4</button>
                        </td>
                        <td>
                            <button onClick={handleClickFive}>5</button>
                        </td>
                        <td>
                            <button onClick={handleClickSix}>6</button>
                        </td>
                        <td>
                            <button onClick={handleClickMinus}>{"-"}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleClickOne}>1</button>
                        </td>
                        <td>
                            <button onClick={handleClickTwo}>2</button>
                        </td>
                        <td>
                            <button onClick={handleClickThree}>3</button>
                        </td>
                        <td>
                            <button onClick={handleClickPlus}>{"+"}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button >+/-</button>
                        </td>
                        <td>
                            <button onClick={handleClickZero}>0</button>
                        </td>
                        <td>
                            <button>.</button>
                        </td>
                        <td>
                            <button onClick={handleClickEquate}>{"="}</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}