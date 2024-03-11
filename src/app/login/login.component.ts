import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { LoginService } from "./login.service";

import * as Constants from "../utils/Constants";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss", "../app.component.scss"]
})

export class LoginComponent implements OnInit {

  CONSTANTS: any = Constants;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {}

  getDataUser(correo: string, contrasena: string) {
    this.loginService.getLoginUser().subscribe({
      next: dataUsuarios => {
        console.log("dataUsuarios", dataUsuarios);
        if (this.validateDataUser(correo, contrasena, dataUsuarios)) {
          this.toastr.success(this.CONSTANTS.MESSAGE.MESSAGE_LOGIN_WELCOME);
          this.router.navigate(["/alimento"]);
        } else {
          this.toastr.info(this.CONSTANTS.ALERT.ERROR_LOGIN_SING_IN);
        }
      },
      error: error => {
        this.toastr.error(this.CONSTANTS.ALERT.ERROR);
        console.log("error", error);
      }
    });
  }

  createNewUser() {
    console.log("/registro");
    this.router.navigate(["/registro"]);
  }

  validateDataUser (correo: string, contrasena: string, dataUser: any) {
    let validator: boolean = false;
    dataUser.map((user: any) => {
      if (user.correo.toString().toLowerCase() === correo.toString().toLowerCase() &&  user.contrasena.toString().toLowerCase() === contrasena.toString().toLowerCase()) {
        validator = true;
      }
    })
    return validator;
  }
}
