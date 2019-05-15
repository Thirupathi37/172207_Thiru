import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsupwasherComponent } from './addsupwasher.component';

describe('AddsupwasherComponent', () => {
  let component: AddsupwasherComponent;
  let fixture: ComponentFixture<AddsupwasherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsupwasherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsupwasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
