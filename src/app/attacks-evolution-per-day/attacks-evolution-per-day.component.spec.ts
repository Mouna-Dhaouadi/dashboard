import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacksEvolutionPerDayComponent } from './attacks-evolution-per-day.component';

describe('AttacksEvolutionPerDayComponent', () => {
  let component: AttacksEvolutionPerDayComponent;
  let fixture: ComponentFixture<AttacksEvolutionPerDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttacksEvolutionPerDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttacksEvolutionPerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
