import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KgpChronicalComponent } from './kgp-chronical.component';

describe('KgpChronicalComponent', () => {
  let component: KgpChronicalComponent;
  let fixture: ComponentFixture<KgpChronicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KgpChronicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KgpChronicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
