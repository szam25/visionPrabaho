import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangroveComponent } from './mangrove.component';

describe('MangroveComponent', () => {
  let component: MangroveComponent;
  let fixture: ComponentFixture<MangroveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangroveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangroveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
