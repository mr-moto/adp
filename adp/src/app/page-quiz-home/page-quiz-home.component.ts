import { Component, OnInit } from '@angular/core';

import * as data from "../../assets/quiz.json";

@Component({
  selector: 'app-page-quiz-home',
  templateUrl: './page-quiz-home.component.html',
  styleUrls: ['./page-quiz-home.component.css']
})
export class PageQuizHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quiz1Title = (<any>data).quizzes[0].title;
  quiz2Title = (<any>data).quizzes[1].title;


}
