import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppMenuComponent } from './app-menu.component';
import { RouterLink, RouterLinkActive } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
    providers: [],
    declarations: [
        AppMenuComponent,
    ],
    exports: [
        AppMenuComponent,
    ]
})
export class AppMenuModule {

}
