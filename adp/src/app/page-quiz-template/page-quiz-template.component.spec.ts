import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuizTemplateComponent } from './page-quiz-template.component';

describe('PageQuizTemplateComponent', () => {
  let component: PageQuizTemplateComponent;
  let fixture: ComponentFixture<PageQuizTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQuizTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuizTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
