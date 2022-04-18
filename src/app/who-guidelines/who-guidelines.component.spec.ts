import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoGuidelinesComponent } from './who-guidelines.component';

describe('WhoGuidelinesComponent', () => {
  let component: WhoGuidelinesComponent;
  let fixture: ComponentFixture<WhoGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
