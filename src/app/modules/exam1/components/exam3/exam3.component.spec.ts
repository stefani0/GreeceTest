import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam3Component } from './exam3.component';

describe('Exam3Component', () => {
  let component: Exam3Component;
  let fixture: ComponentFixture<Exam3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exam3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
