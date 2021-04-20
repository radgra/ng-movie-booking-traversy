import { IMovie } from './../models/movie.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ISeatSelection {
  row:number;
  movie:number;
  column:number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _selectedMovie:IMovie
  private selectedMovieSubject:BehaviorSubject<IMovie> = new BehaviorSubject(null)
  selectedMovie$ = this.selectedMovieSubject.asObservable()
  
  private selectedSeats:ISeatSelection[] = []
  private selectedSeatsSubject:BehaviorSubject<ISeatSelection[]> = new BehaviorSubject(null)
  selectedSeats$ = this.selectedSeatsSubject.asObservable()
  
  constructor() { }


  get selectedMovie():IMovie {
    return this._selectedMovie
  }

  set selectedMovie(movie:IMovie) {
    this._selectedMovie = movie
    this.selectedMovieSubject.next(movie)
  }

  selectSeat(seat:ISeatSelection) {
    this.selectedSeats.push(seat)
    this.selectedSeatsSubject.next(this.selectedSeats)
  }

  resetSelection() {
    this.selectedSeats = []
    this.selectedSeatsSubject.next(this.selectedSeats)
  }

  
  unselectSeat(seat:ISeatSelection) {
    this.selectedSeats = this.selectedSeats.filter(s => {
      return !(s.column === seat.column && s.movie === seat.movie && s.row === seat.row) 
    })
    this.selectedSeatsSubject.next(this.selectedSeats)
  }



}
