import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuizHomeComponent } from './page-quiz-home.component';

describe('PageQuizHomeComponent', () => {
  let component: PageQuizHomeComponent;
  let fixture: ComponentFixture<PageQuizHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQuizHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuizHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
