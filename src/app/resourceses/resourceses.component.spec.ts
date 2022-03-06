import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesesComponent } from './resourceses.component';

describe('ResourcesesComponent', () => {
  let component: ResourcesesComponent;
  let fixture: ComponentFixture<ResourcesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
