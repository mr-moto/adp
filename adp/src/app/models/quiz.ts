import { Question } from "./question";

export class Quiz {
    title: string;
    questions: Question[];

    constructor(data: any) {
        this.title = data[0].quizzes.title;
        this.questions = [];
        data[0].quizzes.questions.forEach(qq => {
            this.questions.push(new Question(qq));
        });
    }
}