import {Component} from '@angular/core';

@Component({
  selector: 'movies',
  styleUrls: ['./movies.component.css'],
  templateUrl: './movies.component.html'
})
export class MoviesComponent {

  dataMovies = ['Rio', 'Rio2', 'Deadpool'];

  addMovie(movieTitle) {
    this.dataMovies.push(movieTitle);
  };
}
