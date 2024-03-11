import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../modelos/user";

@Injectable({
  providedIn: "root"
})

export class LoginService {
  private apiUserService = environment.baseUrl + environment.urlUserService;

  constructor(private http: HttpClient) { }

  getLoginUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUserService);
  }

}
