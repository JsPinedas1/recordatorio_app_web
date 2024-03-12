import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as Constants from "src/app/utils/Constants";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss", "../../app.component.scss"]
})
export class MenuComponent implements OnInit {

  @Input() openDiary: boolean = false;
  @Input() openFood: boolean = false;

  CONSTANTS: any = Constants;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  diary() {
    if (!this.openDiary){
      console.log("/agenda");
      this.router.navigate(["/agenda"]);
    }
  }

  food() {
    if (!this.openFood){
      console.log("/alimento");
      this.router.navigate(["/alimento"]);
    }
  }

  logout() {
    console.log("/login");
    this.router.navigate(["/login"]);
  }

}
