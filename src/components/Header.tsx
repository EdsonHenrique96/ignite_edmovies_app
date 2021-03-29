import '../styles/header.scss';

import { GenreResponse } from '../models';

interface HeaderProps {
  selectedGenre: GenreResponse; 
}

export function Header({ selectedGenre }: HeaderProps) {
  return (
    <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}