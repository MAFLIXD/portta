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
      poster: 'https://image.tmdb.org/t/p/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      year: 2019
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      description: 'Dos hombres encarcelados se vinculan a lo largo de los años, encontrando consuelo y eventual redención a través de actos de decencia común.',
      rating: 9.3,
      genre: 'drama',
      poster: 'https://image.tmdb.org/t/p/w300/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      year: 1994
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'Cuando el Joker causa estragos en Gotham City, Batman debe enfrentar uno de los mayores desafíos psicológicos y físicos.',
      rating: 9.0,
      genre: 'accion',
      poster: 'https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      year: 2008
    },
    {
      id: 4,
      title: 'Inception',
      description: 'Un ladrón que roba secretos corporativos through dream-sharing technology tiene la tarea inversa de plantar una idea en la mente de un CEO.',
      rating: 8.8,
      genre: 'ciencia-ficcion',
      poster: 'https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      year: 2010
    },
    {
      id: 5,
      title: 'Toy Story',
      description: 'Los juguetes de un niño cobran vida cuando los humanos no están presentes, liderados por el vaquero Woody y el astronauta Buzz Lightyear.',
      rating: 8.3,
      genre: 'animacion',
      poster: 'https://image.tmdb.org/t/p/w300/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
      year: 1995
    },
    {
      id: 6,
      title: 'Superbad',
      description: 'Dos amigos de secundaria intentan comprar alcohol para una fiesta para impresionar a sus compañeros de clase y ganar popularidad.',
      rating: 7.6,
      genre: 'comedia',
      poster: 'https://image.tmdb.org/t/p/w300/ek8e8txUyUwd2BNqj6lFEerJQqF.jpg',
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