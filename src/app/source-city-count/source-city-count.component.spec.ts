import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCityCountComponent } from './source-city-count.component';

describe('SourceCityCountComponent', () => {
  let component: SourceCityCountComponent;
  let fixture: ComponentFixture<SourceCityCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCityCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCityCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
