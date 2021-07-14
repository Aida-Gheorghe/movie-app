import { useEffect, useState } from 'react'
import axios from 'axios'

const Favorite = ({ userForm, movieId, movieInfo }) => {
    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)
    const variable = {
        userForm: userForm,
        movieId: movieId,
        movieTitle: movieInfo.original_title,
        movieImage: movieInfo.backdrop_path,
        movieRunTime: movieInfo.runtime,
        movieDetailPoster: movieInfo.poster_path

    }


    useEffect(() => {

        axios.post('/api/favorite/favoriteNumber', variable)
            .then(res => {
                if (res.data.success) {
                    setFavoriteNumber(res.data.favoriteNumber)

                } else {
                    alert('Failed to get favoriteNumber')
                }
            })

        axios.post('/api/favorite/favorited', variable)
            .then(res => {
                if (res.data.success) {
                    setFavorited(res.data.favorited)
                } else {
                    alert('Failed to get Favorite Info')
                }
            })
        // eslint-disable-next-line
    }, [])

    const onClickFavorite = () => {
        if (Favorited) {
            axios.post('/api/favorite/removeFromFavorite', variable)
                .then(res => {
                    if (res.data.success) {
                        setFavoriteNumber(FavoriteNumber - 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to remove from favorite')
                    }
                })
        } else {
            axios.post('/api/favorite/addToFavorite', variable)
                .then(res => {
                    if (res.data.success) {
                        setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to add to Favorites')
                    }
                })
        }
    }

    return (
        <div>
            <button onClick={onClickFavorite} style={{ height: '60px', borderRadius: '25px', outline: 'none', backgroundColor: 'purple', color: 'white', fontSize: '1rem' }}>{Favorited ? "remove from Favorite" : "Add to Favorite"}{FavoriteNumber}</button>
        </div>
    );
}

export default Favorite;