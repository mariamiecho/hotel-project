import { Apperror } from './apperror';

export class DuplicateRecordError extends Apperror {
    constructor(message: string) {
        super(message);
        this.name = 'DuplicateRecordError';
    }
}