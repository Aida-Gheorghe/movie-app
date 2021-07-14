import { Link } from 'react-router-dom'
const MainImage = ({ image, title, text, id }) => {

    return (
        <Link to={`/movie/${id}`}>
            <div style={{ backgroundImage: `url('${image}')`, height: '85vh', backgroudSize: '100%, cover', backgroundPosition: 'center, center', width: '80%', position: 'relative', margin: '0 auto' }}>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '15%', boxShadow: 'inset 0 0 50px #fff, inset 20px 0 80px #f0f,  inset 20px 0 300px #f0f,  inset 20px 0 300px #0ff' }}>
                    <h1 style={{ color: 'Black', opacity: '1', textAlign: 'center' }}>{title}</h1>
                    <p style={{ color: 'white', fontSize: '1.2rem', opacity: '1', padding: '0 25px' }}>{text}</p>
                </div>
            </div>

        </Link>

    );
}

export default MainImage;