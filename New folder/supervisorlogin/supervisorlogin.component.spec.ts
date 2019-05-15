import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorloginComponent } from './supervisorlogin.component';

describe('SupervisorloginComponent', () => {
  let component: SupervisorloginComponent;
  let fixture: ComponentFixture<SupervisorloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
