import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as Constants from "src/app/utils/Constants";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss", "../../app.component.scss"]
})
export class ButtonComponent {

  @Input() buttonText: string = "";
  @Input() style: string = "";
  @Input() type: string = "";
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  CONSTANTS: any = Constants;

  constructor() { }

  handleClick(): void {
    this.onClick.emit();
  }

}
