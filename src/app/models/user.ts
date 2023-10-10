export class User {
    constructor(
        public id: number,
        public firstname: string,
        public surname: string,
        public email: string,
        public password: string,
        public belt?: string,
        public team?: string,
        public weight?: number,
    ) {
    }
}
