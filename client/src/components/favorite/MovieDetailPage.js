import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MainImage from './MainImage'
import GridCard from './GridCard'
import Favorite from '../Favorite'
import './MovieDetailPage.css'
const MovieDetailPage = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const [Crews, setCrews] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=41d8d78e19b8b325638d9c751b0760e0&language=en-US`)
            .then(res => res.json())
            .then(res => {
                setMovie(res)
                //const x = window.location.reload(true)
                fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=41d8d78e19b8b325638d9c751b0760e0`)
                    .then(res => res.json())
                    .then(res => {
                        //console.log(res.cast)
                        setCrews(res.cast)

                    })
            })
        // eslint-disable-next-line
    }, [])

    const handleClick = () => {
        setActorToggle(!ActorToggle)
    }

    return (
        <div>
            {/* Main Image */}
            {movie && <MainImage
                image={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                title={movie.original_title}
                text={movie.overview} />
            }

            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Favorite
                        userForm={localStorage.getItem('userId')}
                        movieId={id}
                        movieInfo={movie} />
                </div>


                {/* Movie Info Table */}
                <h2>Movie Info</h2>
                <div style={{ width: '75%', border: '4px inset purple', display: "grid", gridTemplateColumns: "repeat(4, [col] 1fr)", gridGap: "10px" }}>
                    <p><strong>Movie Title:<br /></strong> {movie.original_title}</p>
                    <p><strong>Release Date:<br /></strong> {movie.release_date}</p>
                    <p><strong>Revenue:<br /></strong> {movie.revenue}</p>
                    <p><strong>Runtime:<br /></strong> {movie.runtime}</p>
                    <p><strong>Vote Average:<br /></strong> {movie.vote_average}</p>
                    <p><strong>Vote Count:<br /></strong> {movie.vote_count}</p>
                    <p><strong>Status:<br /></strong> {movie.status}</p>
                    <p><strong>Popularity:<br /></strong> {movie.popularity}</p>
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={handleClick} style={{ height: '60px', borderRadius: '25px', outline: 'none', backgroundColor: 'purple', color: 'white', fontSize: '1.5rem' }}>Toggle Actor</button>
                </div><br />

                {/* Grid Cars for Crews */}
                {ActorToggle &&
                    <div className="scroll" style={{ display: 'flex', flexDirection: 'row', width: '85%', overflowX: 'scroll' }}>
                        {Crews && Crews.map((crew, index) => (
                            <div key={index} style={{ width: '400px' }}>
                                {crew.profile_path && <GridCard
                                    actor={crew.name} actorImage={`https://image.tmdb.org/t/p/w500${crew.profile_path && crew.profile_path}`}
                                />}

                            </div>

                        ))}
                    </div>
                }


            </div>
        </div >
    )
}

export default MovieDetailPage;