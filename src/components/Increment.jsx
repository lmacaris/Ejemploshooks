import React from "react"

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/display-name
export const Increment = React.memo(( {increment}) => { //usecallback va de la mano con react.memo

    console.log('me estoy dibujando')

    return (
            <button onClick={() => increment(5)}>Increment</button>
    )
}
)