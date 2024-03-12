import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";

import { AlimentosService } from "./alimentos.service";
import { DialogComponent } from "../components/dialog/dialog.component";

import * as Constants from "../utils/Constants";

@Component({
  selector: "app-alimentos",
  templateUrl: "./alimentos.component.html",
  styleUrls: ["./alimentos.component.scss", "../app.component.scss"]
})
export class AlimentosComponent implements OnInit {

  CONSTANTS: any = Constants;

  foodDataList: any[] = [];

  constructor(
    private dialog: MatDialog,
    private foodService: AlimentosService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.getDataFood();
  }

  getDataFood() {
    this.foodService.getFoodList().subscribe({
      next: dataFood => {
        this.foodDataList = dataFood;
      },
      error: error => {
        this.toastr.error(this.CONSTANTS.ALERT.ERROR);
        console.log("error", error);
      }
    });
  }

  editEvent(object: any) {
    if (object !== undefined) {
      console.log("ID", object);
      const dialogRef = this.dialog.open(DialogComponent, {
        width: "60vw",
        height: "31vw",
        data: {
          objectCantidad: object.cantidad,
          objectCodigo: object.codigo,
          objectDias: object.dias,
          objectFecha: object.fecha,
          objectId: object.id,
          objectNombre: object.nombre,
          title: this.CONSTANTS.MESSAGE.MESSAGE_MODAL_EDIT_TITLE,
          type: this.CONSTANTS.LABEL.MODAL_TYPE_EDIT_FOOD,
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === this.CONSTANTS.LABEL.MODAL_SAVE) {
          this.toastr.success(this.CONSTANTS.MESSAGE.MESSAGE_MODAL_EDIT_SUCCESS);
        }
      });
    }
  }

  deleteEvent() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "40vw",
      height: "10vw",
      data: {
        title: this.CONSTANTS.MESSAGE.MESSAGE_MODAL_DELETE_CONFIRM,
        type: this.CONSTANTS.LABEL.MODAL_TYPE_DELETE,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === this.CONSTANTS.LABEL.MODAL_SAVE) {
        this.toastr.success(this.CONSTANTS.MESSAGE.MESSAGE_MODAL_DELETE);
      }
    });
  }

}
