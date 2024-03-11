import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AgendaComponent } from "./agenda/agenda.component";
import { AlimentosComponent } from "./alimentos/alimentos.component";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";


const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "alimento", component: AlimentosComponent, pathMatch: "full" },
  { path: "agenda", component: AgendaComponent, pathMatch: "full" },
  { path: "registro", component: RegistroComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
