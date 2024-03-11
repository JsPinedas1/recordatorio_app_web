import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LABEL } from 'src/app/utils/Constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() openDiary: boolean = false;
  @Input() openFood: boolean = false;

  CONSTANTS: any = LABEL;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  diary() {
    console.log("/agenda");
    this.router.navigate(["/agenda"]);
  }

  food() {
    console.log("/alimento");
    this.router.navigate(["/alimento"]);
  }

  logout() {
    console.log("/login");
    this.router.navigate(["/login"]);
  }

}
