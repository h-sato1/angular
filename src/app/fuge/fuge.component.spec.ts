import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FugeComponent } from './fuge.component';

describe('FugeComponent', () => {
  let component: FugeComponent;
  let fixture: ComponentFixture<FugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
