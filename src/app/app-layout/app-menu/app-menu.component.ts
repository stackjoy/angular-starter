import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from "../../shared/services/util/navigation.service";
import { AppMenuService } from "./app-menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: 'app-menu.component.html',
  styleUrls: ['app-menu.component.scss'],
})
export class AppMenuComponent implements OnInit, OnDestroy {

  constructor(private navigationService: NavigationService, private appMenuService: AppMenuService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  navigateTo(page: string) {
    this.navigationService.navigateTo([page]);
    this.appMenuService.closeMenu();
  }
}
