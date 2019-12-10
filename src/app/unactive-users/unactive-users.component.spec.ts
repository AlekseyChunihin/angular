import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnactiveUsersComponent } from './unactive-users.component';

describe('UnactiveUsersComponent', () => {
  let component: UnactiveUsersComponent;
  let fixture: ComponentFixture<UnactiveUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnactiveUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnactiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
