import { Component } from "@angular/core";

import * as Constants from "./utils/Constants";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  TITLE: any = Constants.TITLE;

  constructor() {}
}
