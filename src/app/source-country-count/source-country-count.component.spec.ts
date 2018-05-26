import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCountryCountComponent } from './source-country-count.component';

describe('SourceCountryCountComponent', () => {
  let component: SourceCountryCountComponent;
  let fixture: ComponentFixture<SourceCountryCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCountryCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCountryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
