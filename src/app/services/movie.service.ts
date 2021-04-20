import { moviesData } from './movies.data';
import { IMovie } from './../models/movie.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies:IMovie[] = moviesData
  constructor() {}
}
