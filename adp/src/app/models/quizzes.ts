import { Quiz } from "./quiz";

export class Quizzes {
    public quizzes: Quiz[] = null;

    constructor(data: any) {
        data = data || {};
        this.quizzes = [];
        data[0].forEach( element => {
            this.quizzes.push(new Quiz(element))
        });
    }
}