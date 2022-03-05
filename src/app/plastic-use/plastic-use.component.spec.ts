import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticUseComponent } from './plastic-use.component';

describe('PlasticUseComponent', () => {
  let component: PlasticUseComponent;
  let fixture: ComponentFixture<PlasticUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasticUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
