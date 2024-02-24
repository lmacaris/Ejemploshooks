import { UseCounter } from "../hooks/UseCounter"

export const ContadorComponent = () => {

    const {increase, decrease, reset, counter } = UseCounter(0)

    return (
        <>
            <h1>Counter:  {counter} </h1>
            <button className="btn btn-primary"onClick={ () => increase(1)}>+1</button>
            <button className="btn btn-danger"onClick={ () => reset()}>Reset</button>
            <button className="btn btn-primary"onClick={ () => decrease(1, false)}>-1</button>
        </>
    )
}
