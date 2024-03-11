import { Component } from "@angular/core";

import * as Constants from "../utils/Constants";

@Component({
  selector: "app-alimentos",
  templateUrl: "./alimentos.component.html",
  styleUrls: ["./alimentos.component.scss", "../app.component.scss"]
})
export class AlimentosComponent {

  CONSTANTS: any = Constants;

}
