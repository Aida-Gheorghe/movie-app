import { useState } from 'react'
import GridCard from './favorite/GridCard'

const Search = () => {
    const [Movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=41d8d78e19b8b325638d9c751b0760e0&query='

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            fetch(SEARCH_API + searchTerm)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results)
                })
            setSearchTerm("")
        }
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div style={{ background: '#f1f1f1', height: '92vh' }}>
            <form onSubmit={handleOnSubmit} className="search" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1' }}>
                <input
                    style={{ borderRadius: '10px', height: '30px', width: '300px', margin: '10px', boxShadow: '1px 3px 5px rgba(0,0,0,0.4)', outline: 'none' }}
                    type="search"
                    placeholder="Search...."
                    value={searchTerm}
                    onChange={handleOnChange}
                />
            </form>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, [col] 1fr)", gridGap: "10px", margin: '0 20px', backgroundColor: '#f1f1f1' }}>
                {Movies.length > 0 && Movies.map((movie, index) => (
                    <div key={index}>
                        <GridCard
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            movieId={movie.id}
                        />
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Search;