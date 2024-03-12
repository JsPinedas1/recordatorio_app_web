import { Component } from "@angular/core";

import * as Constants from "../utils/Constants";

@Component({
  selector: "app-agenda",
  templateUrl: "./agenda.component.html",
  styleUrls: ["./agenda.component.scss", "../app.component.scss"]
})
export class AgendaComponent {

  CONSTANTS: any = Constants;

}
