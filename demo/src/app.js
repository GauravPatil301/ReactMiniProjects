import {useEffect, useState} from 'react';
import MovieCard from './MovieCards';
import SearchIcon from './search.svg'
import './app.css';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.API_KEY}`;

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm,setSearchTerm] = useState('');

    useEffect(()=>{
        searchMovies('Spiderman')
    },[])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }
    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input placeholder='Search for Movies' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
                <img src={SearchIcon} alt="search" onClick={()=>{searchMovies(searchTerm)}}/>
            </div>

            {
                movies?.length > 0 ? (<div className='container'>
                {movies.map((movie,key) => (<MovieCard movie={movie} key={key}/>))}
            </div>) : (<div className='empty'>
                <h2>No Movies found</h2>
            </div>)
            }
        </div>
    );
}

export default App;