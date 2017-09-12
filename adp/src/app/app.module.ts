import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageQuizHomeComponent } from './page-quiz-home/page-quiz-home.component';
import { PageQuizTemplateComponent } from './page-quiz-template/page-quiz-template.component';
import { ScoreComponent } from './score/score.component';


const routes: Routes = [
  { path: '', component: PageQuizHomeComponent },
  { path: 'quiz1', component: PageQuizTemplateComponent },
  { path: 'quiz2', component: PageQuizTemplateComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PageQuizHomeComponent,
    PageQuizTemplateComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
