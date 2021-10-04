import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundingsComponent } from './foundings.component';

describe('FoundingsComponent', () => {
  let component: FoundingsComponent;
  let fixture: ComponentFixture<FoundingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
