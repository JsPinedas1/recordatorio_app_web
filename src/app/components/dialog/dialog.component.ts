import { Component, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import * as Constants from "src/app/utils/Constants";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss", "../../app.component.scss"]
})
export class DialogComponent {

  CONSTANTS: any = Constants;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(): void {
    this.dialogRef.close(this.CONSTANTS.LABEL.MODAL_CANCEL);
  }

  saveDialog(): void {
    this.dialogRef.close(this.CONSTANTS.LABEL.MODAL_SAVE);
  }

}
