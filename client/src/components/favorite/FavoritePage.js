import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './FavoritePage.css'

const FavoritePage = () => {
    const variables = { userForm: localStorage.getItem('userId') }
    const [FavoritedMovies, setFavoriteMovies] = useState([])


    useEffect(() => {
        fetchFavoriteMovies()

        // eslint-disable-next-line
    }, [])

    const fetchFavoriteMovies = () => {
        axios.post('/api/favorite/getFavoriteMovie', variables)
            .then(res => {
                if (res.data.success) {
                    setFavoriteMovies(res.data.favorites)
                } else {
                    alert('Failed to get favorited videos')
                }
            })
    }


    const onClickRemove = (movieId) => {
        const variable = {
            movieId: movieId,
            userForm: localStorage.getItem('userId')
        }

        axios.post('/api/favorite/removeFromFavorite', variable)
            .then(res => {
                if (res.data.success) {
                    fetchFavoriteMovies()
                } else {
                    alert('Failed to remove from favorite')
                }
            })
    }

    const renderTableBody = FavoritedMovies.map((movie, index) => {


        return (
            <tr key={index}>
                <td >
                    <Link to={`/movie/${movie.movieId}`} className="one">
                        {movie.movieTitle}
                        <span className="two" >
                            {movie.movieDetailPoster ?
                                <img src={`https://image.tmdb.org/t/p/w200${movie.movieDetailPoster}`} alt="moviePost" />
                                :
                                "no Image"
                            }
                        </span>

                    </Link>
                </td>


                <td>{movie.movieRunTime} mins</td>
                <td><button onClick={() => onClickRemove(movie.movieId)} style={{ height: '60px', borderRadius: '25px', outline: 'none', backgroundColor: 'purple', color: 'white', fontSize: '1rem' }}>Remove from the Favorites</button></td>
            </tr>
        )
    })

    return (

        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h3>My Movies</h3>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Movie Title </th>
                        <th>Movie RunTime </th>
                        <th>Remove from favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableBody}
                </tbody>
            </table>
        </div>

    )
}

export default FavoritePage;