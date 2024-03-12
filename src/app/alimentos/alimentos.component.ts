import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { AlimentosService } from "./alimentos.service";

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

  deleteEvent() {
    console.log("eliminar");
  }

}
