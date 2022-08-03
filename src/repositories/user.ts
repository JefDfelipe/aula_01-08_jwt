export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

export default class UserRepository {
    static users: User[] = [{
        id: 1,
        name: 'Vini',
        email: 'vini@email.com',
        password: '1234'
    }];
}