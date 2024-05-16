import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataComponentsComponent } from './display-data-components.component';

describe('DisplayDataComponentsComponent', () => {
  let component: DisplayDataComponentsComponent;
  let fixture: ComponentFixture<DisplayDataComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDataComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
