import { useCallback, useState } from 'react'
import { Increment } from './Increment'
export const CallbackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementDad = useCallback(
        (val) => {
        setCounter(contador => contador + val)
        }, []
    )
    

    return (
        <>
        <h1>Counter:{counter} </h1>
        <Increment increment={incrementDad}></Increment>
        </>
    )
}
