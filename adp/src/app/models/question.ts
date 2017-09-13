import { Answer } from './answer'

export class Question {
    question: string;
    answers: Answer[];
    answered: boolean;

    constructor(data: any) {
        data = data || {};
        this.question = data.question;
        this.answers = [];
        data.answers.forEach(o => {
            this.answers.push(new Answer(o));
        });
    }
}