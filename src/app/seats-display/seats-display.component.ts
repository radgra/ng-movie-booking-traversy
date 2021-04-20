import { SeatType } from './../components/seat/seat.component';
import { IMovie } from './../models/movie.interface';
import { UserService, ISeatSelection } from './../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, filter, switchMap, map } from 'rxjs/operators'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-seats-display',
  templateUrl: './seats-display.component.html',
  styleUrls: ['./seats-display.component.scss']
})
export class SeatsDisplayComponent implements OnInit, OnDestroy {
  movie:IMovie
  userServiceSub:Subscription

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userServiceSub = this.userService.selectedMovie$.pipe(
      tap(movie => this.movie = JSON.parse(JSON.stringify(movie))),
      switchMap(movie => {
        return this.userService.selectedSeats$ }),
      filter(seats => seats !== null),
      map(seats => seats.filter(seat => seat.movie === this.movie.id)),
      tap((seats:ISeatSelection[]) => {
        seats.forEach(seat => {
          this.movie.seats[seat.row][seat.column] = 100
        })
      })
      ).subscribe()
  }


  getSeatType(seat:number):SeatType  {
    if(seat === 0) return "none"
    if(seat === 1) return "free"
    if(seat === 30) return "occupied"
    if(seat === 100) return "selected"
  }

  onSelected(row:number, column:number) {
    // Handling occupied
    if(this.movie.seats[row][column] === 30) return
    // Handling None 
    if(this.movie.seats[row][column] === 0) return
    
    
    const seat:ISeatSelection = {
      column,
      row,
      movie:this.movie.id
    }

    // Handling unselect
    if(this.movie.seats[row][column] === 100) return this.unselectSeat(seat)

    // Handling selection
    this.userService.selectSeat(seat)
  }

  private unselectSeat(seat:ISeatSelection) {
    this.userService.unselectSeat(seat)
    this.movie.seats[seat.row][seat.column] = 1
  }

  ngOnDestroy(): void {
    this.userServiceSub.unsubscribe()
  }
}
