/* eslint-disable no-unused-vars */
import { useFetch } from "../hooks/UseFetch"

export const UserComponent = () => {

    const {data, isLoading, errors} = useFetch('https://jsonplaceholder.typicode.com/users')


    return (
        <>
        <h1>User List Component</h1>
        {
            isLoading ? 
        <h4>Loading..</h4>
        : errors 
        ? <p>There is an error</p>  
        : <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Mail</th>
                <th scope="col">Website</th>
                </tr>
            </thead>
            <tbody>

            {data.map(user => {
                return(
                <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                </tr>
                )
            })}
            </tbody>
        </table>
        }
        </>
    )
}
