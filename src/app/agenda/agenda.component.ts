import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";

import { AgendaService } from "./agenda.service";
import { DialogComponent } from "../components/dialog/dialog.component";

import * as Constants from "../utils/Constants";

@Component({
  selector: "app-agenda",
  templateUrl: "./agenda.component.html",
  styleUrls: ["./agenda.component.scss", "../app.component.scss"]
})
export class AgendaComponent implements OnInit {

  CONSTANTS: any = Constants;

  diaryDataList: any[] = [];

  constructor(
    private dialog: MatDialog,
    private agendaService: AgendaService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.getDataAgenda();
  }

  getDataAgenda() {
    this.agendaService.getAgendaList().subscribe({
      next: dataAgenda => {
        this.diaryDataList = dataAgenda;
      },
      error: error => {
        this.toastr.error(this.CONSTANTS.ALERT.ERROR);
        console.log("error", error);
      }
    });
  }

  editEvent(object: any) {
    if (object !== undefined) {
      console.log("Agenda", object);
      const dialogRef = this.dialog.open(DialogComponent, {
        width: "60vw",
        height: "31vw",
        data: {
          objectDescripcion: object.descripcion,
          objectFecha: object.fecha,
          objectHoraInicial: object.horaInicial,
          objectHoraFinal: object.horaFinal,
          objectId: object.id,
          objectRecordarCada: object.recordarCada,
          title: this.CONSTANTS.MESSAGE.MESSAGE_MODAL_EDIT_AGENDA_TITLE,
          type: this.CONSTANTS.LABEL.MODAL_TYPE_EDIT_AGEND,
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
