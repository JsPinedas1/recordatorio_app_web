import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import * as Constants from "src/app/utils/Constants";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss", "../../app.component.scss"],
})

export class TableComponent implements OnInit {

  @Input() columnNames: any[] = [];
  @Input() dataSourceList: any[] = [];
  @Input() displayedColumns: string[] = [];

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  CONSTANTS: any = Constants;

  dataSource = new MatTableDataSource<any>(this.dataSourceList);
  selection = new SelectionModel<any>(true, []);
  checkboxColor: string = "blue";

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.dataSourceList;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? "deselect" : "select"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.position + 1}`;
  }

  handleClick(object: any): void {
    this.onClick.emit(object);
  }

}
