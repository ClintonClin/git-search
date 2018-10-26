import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFormsComponent } from './git-forms.component';

describe('GitFormsComponent', () => {
  let component: GitFormsComponent;
  let fixture: ComponentFixture<GitFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
