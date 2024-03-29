import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { NgModule } from "@angular/core";
import { ToastrModule } from "ngx-toastr";

import { AgendaComponent } from "./agenda/agenda.component";
import { AlimentosComponent } from "./alimentos/alimentos.component";
import { ButtonComponent } from "./components/button/button.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./components/menu/menu.component";
import { RegistroComponent } from "./registro/registro.component";
import { TableComponent } from "./components/table/table.component";

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    AlimentosComponent,
    ButtonComponent,
    DialogComponent,
    LoginComponent,
    MenuComponent,
    RegistroComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
