import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import jwt_decode from "jwt-decode";
import { User } from './user';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null as any);

  constructor(private tokenService: TokenService  ) {
    if(this.tokenService.hasToken()){
      this.decodeAndNotify();
    }
   }

  setToken(token: string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    if(token){
      const user = jwt_decode(token);
      this.userSubject.next(user as User);
    }
    
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null as any);
  }
}
