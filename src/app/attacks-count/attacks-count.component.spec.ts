import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacksCountComponent } from './attacks-count.component';

describe('AttacksCountComponent', () => {
  let component: AttacksCountComponent;
  let fixture: ComponentFixture<AttacksCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttacksCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttacksCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
