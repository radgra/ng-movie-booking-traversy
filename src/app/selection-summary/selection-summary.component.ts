import { MovieService } from './../services/movie.service';
import { IMovie } from './../models/movie.interface';
import { tap, filter } from 'rxjs/operators';
import { UserService, ISeatSelection } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-summary',
  templateUrl: './selection-summary.component.html',
  styleUrls: ['./selection-summary.component.scss']
})
export class SelectionSummaryComponent implements OnInit {
  numberOfSeats:number = 0
  price:number = 0
  movies:IMovie[]
  constructor(private userService:UserService, private moviesService:MovieService) { }

  ngOnInit() {
    this.movies = this.moviesService.movies

    this.userService.selectedSeats$.pipe(
      filter(seats => seats !== null),
      tap(this.calculateSummaryText.bind(this))
    ).subscribe()
  }

  calculateSummaryText(seats:ISeatSelection[]) {
    this.numberOfSeats = seats.length
    let price = 0
    seats.forEach(seat => {
      const foundMovie = this.movies.find(movie => movie.id === seat.movie)
      if(foundMovie) {
        price = price + foundMovie.price
      }
    })

    this.price = price
  }

}
