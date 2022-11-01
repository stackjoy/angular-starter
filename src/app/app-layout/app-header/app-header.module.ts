import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppHeaderComponent } from './app-header.component';
import { RouterLink } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterLink,
    ],
    providers: [],
    declarations: [
        AppHeaderComponent,
    ],
    exports: [
        AppHeaderComponent,
    ]
})
export class AppHeaderModule {

}
