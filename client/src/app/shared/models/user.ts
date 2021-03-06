export interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    userName: string;
  }

export class User {
    name: string;
    surname: string;
    email: string;
    password: string;
    username: string;
  }

export interface IBusyUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    userName: string;
    workCount: number;
  }
