import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppMenuService } from "./app-menu/app-menu.service";

@Component({
  selector: 'app-layout',
  templateUrl: 'app-layout.component.html',
  styleUrls: ['app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit, OnDestroy {

  constructor(public appMenuService: AppMenuService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
