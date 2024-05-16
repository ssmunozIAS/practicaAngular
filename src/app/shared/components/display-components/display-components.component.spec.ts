import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponentsComponent } from './display-components.component';

describe('DisplayComponentsComponent', () => {
  let component: DisplayComponentsComponent;
  let fixture: ComponentFixture<DisplayComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
