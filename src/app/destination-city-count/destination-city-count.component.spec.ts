import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCityCountComponent } from './destination-city-count.component';

describe('DestinationCityCountComponent', () => {
  let component: DestinationCityCountComponent;
  let fixture: ComponentFixture<DestinationCityCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationCityCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCityCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
