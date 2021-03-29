import '../styles/content.scss';

import { Movie } from '../models';

import { MovieCard } from './MovieCard';

interface ContentProps {
  movies: Movie[];
}

export function Content({ movies }: ContentProps) {
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}