import { Link } from 'react-router-dom'
import './Form.css'

const UserList = ({ userData }) => {
    const handleClick = () => {

    }
    return (
        <div>
            { userData.map(user => (
                <div className="user-preview" key={user._id} >
                    <Link to={`/detail/${user._id}`} onClick={handleClick} style={{ textDecoration: 'none' }}>
                        <h2>First Name: {user.fname}</h2>
                    </Link>
                    <p>Last Name: {user.lname}</p>


                </div>
            ))}
        </div>
    );
}

export default UserList;