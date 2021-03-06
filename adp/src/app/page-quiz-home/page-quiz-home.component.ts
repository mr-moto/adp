import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
// import { Quizzes, Quiz, Question, Answer } from '../models/index';

import * as data from "../../assets/quiz.json";

@Component({
  selector: 'app-page-quiz-home',
  templateUrl: './page-quiz-home.component.html',
  styleUrls: ['./page-quiz-home.component.css'],
  providers: [QuizService]
})
export class PageQuizHomeComponent implements OnInit {
  view = 'selection';
  qSet: number;
  q: number = 0;
  score: number = 0;
  question: string;
  answers: any[];
  val: boolean;
  percent: number;
  result: string;
  right = false;
  wrong = false;


  constructor( private quizService: QuizService ) { }

  ngOnInit() {}

  quizzes(){
    let quizzes = data[0].quizzes

    return(quizzes)
  }

  quizSelect(quiz){
    if(quiz.title === 'Abstract Quiz'){
      this.view = 'quiz1'
      this.qSet = 0
      this.question = this.firstQuestions(this.qSet).question
      this.answers = this.firstQuestions(this.qSet).answers
      return(this.question, this.answers)
    }
    if(quiz.title === 'Dev Quiz'){
      this.view = 'quiz2'
      this.qSet = 1
      this.question = this.firstQuestions(this.qSet).question
      this.answers = this.firstQuestions(this.qSet).answers
      return(this.question, this.answers)
    }
  }

  firstQuestions(qSet){
    let questionSet = data[0].quizzes[qSet].questions[0]
    return(questionSet)
  }

  nextQuestion(qSet, q){
    let questionSet = data[0].quizzes[qSet].questions[q]
    return(questionSet)
  }

  isCorrect(i, qSet){
    let val = this.answers[i].value
    let length = data[0].quizzes[qSet].questions.length
    if(val === true ){
      this.right = true;
      this.score += 1
      this.q += 1
    } 
    if(val === false){
      this.wrong = true;
      this.q += 1
    }
    if(this.q < length){
      setTimeout(()=>{
        this.question = this.nextQuestion(this.qSet, this.q).question
        this.answers = this.nextQuestion(this.qSet, this.q).answers
        this.right = false
        this.wrong = false
      },2000)
    } 
    if(this.q >= length){
      setTimeout(()=>{
        this.view = 'result'
        let percent = ((this.score / length) * 100)
        if(percent >= 50){
          this.right = true
          this.result = 'pass'
        } else{
          this.wrong = true
          this.result = 'fail'
        }
      },2000)
    }
  }
  
  

}