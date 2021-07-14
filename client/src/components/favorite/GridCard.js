import { Link } from 'react-router-dom'

const GridCard = ({ image, movieId: id, actorImage, actor }) => {
    if (actorImage && actor) {
        return (
            <div style={{ width: '300px', position: 'relative' }} >
                <img style={{ width: '100%', height: '320px' }} alt="img" src={actorImage} />
                <p>{actor}</p>
            </div>
        )
    } else {
        return (
            <div style={{ position: 'relative' }}>
                <Link to={`/movie/${id}`} >
                    <img style={{ width: '100%', height: '320px' }} alt="img" src={image} />
                </Link>
            </div>
        );
    }

}

export default GridCard;