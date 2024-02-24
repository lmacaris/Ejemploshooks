import { ContadorComponent } from "./components/ContadorComponent"
import { FormComponent } from "./components/FormComponent"
import { UserComponent } from "./components/UserComponent"
import { CalculosPesados } from "./components/CalculosPesados"
import { CallbackComponent } from "./components/CallbackComponent"
import { ListaTareas } from "./components/ListaTareas"

export const HooksApp = () => {
    return (
        <>
            <h1>Hooks App</h1>
            <hr />
            <ContadorComponent></ContadorComponent>
            <hr />
            <FormComponent></FormComponent>
            <hr />
            <UserComponent></UserComponent>
            <hr />
            <CalculosPesados></CalculosPesados>
            <hr />
            <CallbackComponent></CallbackComponent>
            <hr />
            <ListaTareas></ListaTareas>
            <hr />
            
        </>
    )
}
