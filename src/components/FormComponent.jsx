import { useEffect, useRef } from "react"
import { UseForm } from "../hooks/UseForm"

export const FormComponent = () => {

    const focusRef = useRef()
    console.log(focusRef)

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    const {formState, userName, email, password, onInputChange} = UseForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    useEffect(() => {
        focusRef.current.focus()
    }, []);

    return (
        <>
            <h1>Form Component</h1>
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="EnterName">Username</label>
            <input 
                type="UserName" 
                className="form-control" 
                name="userName"         
                placeholder="Enter username"
                value={userName}
                onChange={onInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="EnterEmail">Email address</label>
            <input
                ref={focusRef}
                type="email" 
                className="form-control" 
                name="email"         
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                value={email}
                onChange={onInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="EnterPassword">Password</label>
            <input type="password" 
                className="form-control" 
                name="password"         
                placeholder="password"
                value={password}
                onChange={onInputChange}
            />
        </div>
          <button 
          type="submit" 
          className="btn btn-primary">
          Submit</button>
        </form>
            
        </>
    )
}
