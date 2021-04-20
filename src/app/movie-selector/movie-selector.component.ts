import { UserService } from './../services/user.service';
import { IMovie } from './../models/movie.interface';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-selector',
  templateUrl: './movie-selector.component.html',
  styleUrls: ['./movie-selector.component.scss']
})
export class MovieSelectorComponent implements OnInit {
  movies:IMovie[] = []
  selectedMovie:IMovie
  constructor(private moviesService:MovieService, private userService:UserService) { }

  ngOnInit() {
    this.movies = this.moviesService.movies
    this.selectMovie(this.movies[0])
  }
  
  selectMovie(movie:IMovie) {
    this.selectedMovie = movie
    this.userService.selectedMovie = this.selectedMovie
  }

}
