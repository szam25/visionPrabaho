import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnNailingTreesComponent } from './un-nailing-trees.component';

describe('UnNailingTreesComponent', () => {
  let component: UnNailingTreesComponent;
  let fixture: ComponentFixture<UnNailingTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnNailingTreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnNailingTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
