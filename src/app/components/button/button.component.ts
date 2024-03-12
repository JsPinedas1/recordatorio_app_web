import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent {

  @Input() buttonText: string = "";
  @Input() style: string = "";
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  handleClick(): void {
    this.onClick.emit();
  }

}
