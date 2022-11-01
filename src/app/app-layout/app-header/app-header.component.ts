import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppMenuService } from "../app-menu/app-menu.service";

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {

  constructor(private appMenuService: AppMenuService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  toggleAppMenu() {
    this.appMenuService.toggleMenu();
  }
}
