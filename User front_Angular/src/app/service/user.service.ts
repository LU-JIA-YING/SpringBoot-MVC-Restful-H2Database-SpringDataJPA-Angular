import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/v1/user';
  }

  // 獲取所有使用者
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  // id查詢使用者
  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  //添加一個使用者
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  //更新使用者
  public updateUser(id: number,user: User): Observable<any> {
    return this.http.put(`${this.usersUrl}/${id}`, user);
  }

  //刪除使用者
  public   deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;
    const delhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      body: user
    };
    return this.http.delete<User>(url, delhttpOptions);
  }
}
