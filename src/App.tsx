import { useEffect, useState } from 'react';

import { Movie, GenreResponse } from './models';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';

import { api } from './services/api';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponse>({} as GenreResponse);

  useEffect(() => {
    api.get<Movie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponse>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId}/>

      <div className="container">
        <Header selectedGenre={selectedGenre}/>

        <Content movies={movies} />
      </div>
    </div>
  )
}