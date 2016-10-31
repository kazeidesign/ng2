import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
  movies: string[];

  getAllMovies() {
    this.movies = ['Rio', 'Rio2', 'Deadpool'];
    return this.movies;
  }

}
