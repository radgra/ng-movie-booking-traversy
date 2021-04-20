import { MovieService } from './../services/movie.service';
import { UserService, ISeatSelection } from './../services/user.service';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SelectionSummaryComponent } from './selection-summary.component';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('SelectionSummaryComponent', () => {
  let component: SelectionSummaryComponent;
  let fixture: ComponentFixture<SelectionSummaryComponent>;
  let mockUserService;
  let subject:BehaviorSubject<ISeatSelection[]>
  beforeEach(async(() => {
    mockUserService = jasmine.createSpyObj('UserService', ['dummy'])
    subject = new BehaviorSubject([])
    mockUserService.selectedSeats$ = subject.asObservable()

    TestBed.configureTestingModule({
      declarations: [ SelectionSummaryComponent ],
      providers: [ { provide: UserService, useValue: mockUserService }, MovieService
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {

    mockUserService = TestBed.get(UserService);
    // mockUserService.selectedSeats$ = of([{ column:1, row:1, movie:1 }])
    fixture = TestBed.createComponent(SelectionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should calculate summary text', fakeAsync(() => {
    // userService.user = 1
    // expect(userService.user).toBe(1)
    let el = fixture.debugElement
    subject.next([{column:1, row:1, movie:1}])
    fixture.detectChanges()
    expect(component).toBeTruthy();
    expect(component.numberOfSeats).toBe(1)
    expect(component.price).toBe(10)
    const p = el.query(By.css('p'))
    const text = p.nativeElement.innerText
    expect(text).toBe("You have selected 1 seats for a price of $10")
  }));
});
