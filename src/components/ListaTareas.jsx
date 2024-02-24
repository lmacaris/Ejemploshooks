
import { useReducer } from "react"
import { UseForm } from "../hooks/UseForm"



const inicialState = [{

    id:new Date().getDate(),
    tarea: 'explicar reducer',
    finalizada: false
}]



const tareaReducer = (state = inicialState, action = {}) => {

    switch (action.type) {
        case '[Tareas] Agregar tarea':
            return [...state, action.payload]
        case '[Tareas] Finalizar tarea':
            return state.map(tarea => {
                if(tarea.id === action.payload){
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                } return tarea
            })
            // return [...state, action.payload]
        case '[Tareas] Eliminar tarea':
            return state.filter(tarea => tarea.id !== action.payload)
        case '[Tareas] Borrar tareas':
            return []
        default:
            return state
    }

}



// console.log(tareaReducer(inicialState, agregarTarea))

export const ListaTareas = () => {

    const [tareasState, dispatch] = useReducer(tareaReducer, inicialState)


    const {tarea, formState, onInputChange} = UseForm({tarea: ''})
    const agregarTarea = (event) => {
        event.preventDefault();
        if(formState.tarea == '') return
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[Tareas] Agregar tarea',
            payload: tarea
        }
        dispatch(action)
    }   

    const finalizarTarea = ({id}) => {
        
            // console.log(id)

        const action = {
            type: '[Tareas] Finalizaar tarea',
            payload: id
        }

        dispatch(action)
    }

    const eliminarTarea = ({id}) => {
        const action = {
            type: '[Tareas] Eliminar tarea',
            payload: id
        }

        dispatch(action)
    }
    const reset = () => {
        const action = {
            type: '[Tareas] Borrar tareas',
            payload: ''
        }
        dispatch(action)
    }
    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="form-group">
                    <input type="text" className="form-control" name="tarea" placeholder="Ingresa Tarea"
                    value={tarea}
                    onChange={onInputChange}
                />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type='button' className="btn btn-danger" onClick={reset}>Delete all</button>
            </form>
            <hr />
            <ul className="list-group">
                {tareasState.map(item => {
                    return (
                        <li key={item.id} className = 'list-group-item d-flex justify-content-between'>
                        <span>{item.tarea}</span>
                        <div>
                        <input 
                        type="checkbox"
                        value={item.finalizada}
                        onChange={() => finalizarTarea(item)}
                        />
                        <button 
                        className="btn btn-danger"
                        onClick={() => eliminarTarea(item)}
                        >🗑️</button>
                        </div>
                        </li>
                    )
                })}
            </ul>
            
        </>
    )
}
