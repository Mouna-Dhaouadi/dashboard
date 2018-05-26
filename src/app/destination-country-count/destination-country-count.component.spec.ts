import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCountryCountComponent } from './destination-country-count.component';

describe('DestinationCountryCountComponent', () => {
  let component: DestinationCountryCountComponent;
  let fixture: ComponentFixture<DestinationCountryCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationCountryCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCountryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
