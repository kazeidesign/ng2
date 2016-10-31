import {Component} from '@angular/core';
import {MovieService} from './movies.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'movies',
  styleUrls: ['./movies.component.css'],
  templateUrl: './movies.component.html',
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  movieService: MovieService;
  dataMovies: string[];
  nbOfMovies: number;
  // dataMovies = ['Rio', 'Rio2', 'Deadpool'];
  constructor (movieService: MovieService) {
    this.movieService = movieService;
    this.dataMovies = movieService.getAllMovies();
  }

  addMovie(movieTitle) {
    this.dataMovies.push(movieTitle);
    this.nbOfMovies = this.dataMovies.length;
  };

  ngOnInit() {
    this.dataMovies = this.movieService.getAllMovies();
    this.nbOfMovies = this.dataMovies.length;
  }

}
