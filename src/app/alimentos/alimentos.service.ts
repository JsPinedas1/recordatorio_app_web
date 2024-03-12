import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Food } from "../modelos/food";

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {
  private apiFoodService = environment.baseUrl + environment.urlFoodService;

  constructor(private http: HttpClient) { }

  getFoodList(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiFoodService);
  }

}
