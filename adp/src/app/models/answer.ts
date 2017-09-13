export class Answer {
    content: string;
    value: boolean;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.content = data.content;
        this.value = data.value;

    }
};