import {Component} from '@angular/core';
import {MovieService} from './movies.service';

@Component({
  selector: 'movies',
  styleUrls: ['./movies.component.css'],
  templateUrl: './movies.component.html',
  providers: [MovieService]
})
export class MoviesComponent {
  movieService: MovieService;
  dataMovies: string[];
  // dataMovies = ['Rio', 'Rio2', 'Deadpool'];
  constructor (movieService: MovieService) {
    this.movieService = movieService;
    this.dataMovies = movieService.getAllMovies();
  }

  addMovie(movieTitle) {
    this.dataMovies.push(movieTitle);
  };
}
