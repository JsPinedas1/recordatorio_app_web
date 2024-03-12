import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Agenda } from "../modelos/agenda";

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private apiAgendaService = environment.baseUrl + environment.urlAgendaService;

  constructor(private http: HttpClient) { }

  getAgendaList(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.apiAgendaService);
  }

}
