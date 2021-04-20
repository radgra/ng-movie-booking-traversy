import { Component, OnInit, HostBinding, Input } from '@angular/core';

export type SeatType = 'occupied' | 'free' | 'selected' | 'none'

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  _seatType:SeatType = 'free'
  @HostBinding('style.background-color') bgColor:string = '#444451';

  constructor() { }

  ngOnInit() {

  }

  @Input()
  set seatType(seatType: SeatType) {
    this._seatType = seatType
    if(this._seatType === 'free') this.bgColor = '#444451'
    if(this._seatType === 'occupied') this.bgColor = '#fff'
    if(this._seatType === 'selected') this.bgColor = '#6feaf6'
    if(this._seatType === 'none') this.bgColor = 'unset'
  }

  get seatType(): SeatType { return this._seatType; }
}


