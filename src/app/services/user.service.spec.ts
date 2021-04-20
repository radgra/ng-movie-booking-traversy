import { TestBed, fakeAsync } from '@angular/core/testing';

import { UserService } from './user.service';
import { takeLast } from 'rxjs/operators';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should be pending', () => {
    pending()
  })
  
  it('should select seat',fakeAsync(() => {
    // I can also use:
    // const service = new UerService() <--- i dont know what advantages has testbed
    const service:UserService = TestBed.get(UserService);
    let resultSeats; 
    
    // @ts-ignore 
    spyOn(service.selectedSeatsSubject, 'next').and.callThrough();
    service.selectedSeats$.subscribe(seats => {
      resultSeats = seats
    })
    
    service.selectSeat({column:1, row:1, movie:1})
    service.selectSeat({column:1, row:1, movie:2})
    service.unselectSeat({column:1, row:1, movie:1})
    
    expect(resultSeats.length).toBe(1)
    
    // @ts-ignore 
    expect(service.selectedSeatsSubject.next).toHaveBeenCalledTimes(3)
  }))

});
