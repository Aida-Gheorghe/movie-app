import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <div style={{ width: '100wh', height: '25px', padding: '15px 25px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', background: 'rgba(0, 0, 0, 0.3)', boxShadow: 'inset 0px 25px 60px #fff, inset 20px 0 50px #f0f,  inset 20px 0 800px #f0f,  inset 200px 0 300px #0ff' }}>
            <Link to="/" className="nav_link">Home </Link>
            <Link to="/favorite" className="nav_link">Favorite </Link>
            <Link to="/search" className="nav_link">Search </Link> {/*old new item! */}
            <Link to="/users" className="nav_link">User </Link>
            <Link to="/create" className="nav_link">Register </Link>
        </div >
    );
}

export default Navbar;