export class Apperror extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AppError';
    }
}