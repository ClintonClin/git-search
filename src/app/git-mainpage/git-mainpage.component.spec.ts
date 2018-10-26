import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitMainpageComponent } from './git-mainpage.component';

describe('GitMainpageComponent', () => {
  let component: GitMainpageComponent;
  let fixture: ComponentFixture<GitMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
