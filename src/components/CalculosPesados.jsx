/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useMemo } from "react"


export const CalculosPesados= () => {
    
    const [listaNumeros, setListaNumeros] = useState([2,3,4,5,6,7,8,9])
    const [show, setShow] = useState(true)
    const getCalculated = (listaNumeros) => useMemo(() => {
        console.log('calculating...')
        return listaNumeros.reduce((a,b) => a*b)
    }, [listaNumeros])
    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length-1] + 1])
    }
    

    return (
        <>
            <h1>Heavy Calculations</h1>
            <h2>Calculations:</h2>
            <p>{ getCalculated(listaNumeros)}</p>
            <button className="btn btn-primary" onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
            <button className="btn btn-primary" onClick={() => agregarNumero()}>Agregar numero</button>
        </>
    )
}
