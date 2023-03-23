
import { useState } from "react"
import { data } from "./data"


export function Quiz () {

    const [step, setStep] = useState(0)

    function nextStep(e) {
console.log(e.target)
    } 
    return (
        <div>
            <h1 >Quiz</h1>
            <div className="bg">
                <div></div>
            </div>
            <div>
                <div>
              <p>{data[0].question}</p>      
                </div>
<div onClick={(e)=>nextStep(e)}>
    <ul>
        {data[step].variants.map(variant => <li className="" key={variant}>{variant}</li>)}
    </ul>
</div>
            </div>
        </div>
    )
}

