import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatComponent } from './seat.component';

describe('SeatComponent', () => {
  let component: SeatComponent;
  let fixture: ComponentFixture<SeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct color',() => {
    let el = fixture.debugElement
    component.seatType = 'selected'
    const host = el.nativeElement
    
    expect(component.bgColor).toBe('#6feaf6')
    
    fixture.detectChanges()
    expect(host.style.backgroundColor).toBe('rgb(111, 234, 246)')

  })
});
