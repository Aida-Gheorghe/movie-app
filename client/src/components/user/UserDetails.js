import { useParams, Link, useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import './Form.css'



const UserDetails = () => {
    const { id } = useParams();
    const history = useHistory()

    const [userData, setUserData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        fetch('/users/byid/' + id).then(res => {
            if (!res.ok) {
                throw Error('could not fetch the data for that resource')
            }
            return res.json()
        }).then(data => {
            setLoading(false)
            setUserData(data)
            setError(null)
        }).catch(err => {
            setLoading(false)
            setError(err.message)
        })

    })

    const handleClick = () => {
        fetch('/users/delete/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }


    return (
        <div className="user-details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { userData && (<article >
                <h2>First name: {userData.fname}</h2>
                <h2>Last name: {userData.lname}</h2>
                <h2>Email: {userData.email}</h2>
                <h2>Birthday: {new Date(userData.birthday).toLocaleDateString()}</h2>
                <h2>Country: {userData.country}</h2>
                <h2>City: {userData.city}</h2>
                <h2>About: {userData.about}</h2>
                <button onClick={handleClick} className="btn">delete</button>
                <button><Link to={`/edit/${id}`} className="btn">Update Patch</Link></button>
                <button><Link to={`/update/${id}`} className="btn">Put</Link></button>
            </article>)
            }
            {/* <p>{id}</p> */}
        </div >

    );
}

export default UserDetails;