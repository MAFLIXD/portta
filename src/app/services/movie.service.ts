import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      description: 'Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos.',
      rating: 8.4,
      genre: 'accion',
      poster: 'https://via.placeholder.com/300x450/007bff/ffffff?text=Avengers',
      year: 2019
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      description: 'Dos hombres encarcelados se vinculan a lo largo de los años, encontrando consuelo y eventual redención a través de actos de decencia común.',
      rating: 9.3,
      genre: 'drama',
      poster: 'https://via.placeholder.com/300x450/28a745/ffffff?text=Shawshank',
      year: 1994
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'Cuando el Joker causa estragos en Gotham City, Batman debe enfrentar uno de los mayores desafíos psicológicos y físicos.',
      rating: 9.0,
      genre: 'accion',
      poster: 'https://via.placeholder.com/300x450/343a40/ffffff?text=Dark+Knight',
      year: 2008
    },
    {
      id: 4,
      title: 'Inception',
      description: 'Un ladrón que roba secretos corporativos through dream-sharing technology tiene la tarea inversa de plantar una idea en la mente de un CEO.',
      rating: 8.8,
      genre: 'ciencia-ficcion',
      poster: 'https://via.placeholder.com/300x450/6f42c1/ffffff?text=Inception',
      year: 2010
    },
    {
      id: 5,
      title: 'Toy Story',
      description: 'Los juguetes de un niño cobran vida cuando los humanos no están presentes, liderados por el vaquero Woody y el astronauta Buzz Lightyear.',
      rating: 8.3,
      genre: 'animacion',
      poster: 'https://via.placeholder.com/300x450/fd7e14/ffffff?text=Toy+Story',
      year: 1995
    },
    {
      id: 6,
      title: 'Superbad',
      description: 'Dos amigos de secundaria intentan comprar alcohol para una fiesta para impresionar a sus compañeros de clase y ganar popularidad.',
      rating: 7.6,
      genre: 'comedia',
      poster: 'https://via.placeholder.com/300x450/dc3545/ffffff?text=Superbad',
      year: 2007
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  getMoviesByGenre(genre: string): Movie[] {
    return this.movies.filter(movie => movie.genre === genre);
  }
}