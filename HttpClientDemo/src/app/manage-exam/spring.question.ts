import { Question } from './question';

export class SpringQuestion extends Question {
    public askQuestion(): string {
        return "What is Spring Framework?";
    }
}