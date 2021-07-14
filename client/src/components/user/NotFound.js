import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page cannot be found</h2>
            <Link to='/users'>User</Link>
        </div>
    );
}

export default NotFound;