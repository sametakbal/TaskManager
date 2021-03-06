import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IBusyUser, User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://www.netlabsoft.com/api/user/';
  id: number;
  constructor(private http: HttpClient) {
    this.id = +localStorage.getItem('id');
  }

  getUsers() {
    return this.http.get<IBusyUser[]>(this.baseUrl + 'getUsers' + '/' + '?id=' + this.id);
  }
  getUser(id: number) {
    return this.http.get<User>(this.baseUrl + 'getUserById' + '/' + '?id=' + id);
  }
}
