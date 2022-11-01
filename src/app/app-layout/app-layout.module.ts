import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { AppMenuModule } from "./app-menu/app-menu.module";
import { AppHeaderModule } from "./app-header/app-header.module";
import { RouterOutlet } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    AppMenuModule,
    AppHeaderModule,
    RouterOutlet,
  ],
    providers: [],
    declarations: [
        AppLayoutComponent,
    ],
    exports: [
        AppLayoutComponent,
    ]
})
export class AppLayoutModule {

}
