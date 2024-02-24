import { useState } from "react"

export const UseCounter = (inicialValue = 0) => {


    const [counter, setCounter] = useState(inicialValue)
    const increase = (value = 1) => {
        setCounter(counter + value)
    }
    const decrease = (value = 1, negative) => {
        if (!negative && counter - value < 0) {
            setCounter(0)
            return
        }
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(0)
    }

    return {
        counter,
        increase,
        decrease,
        reset
    }
}