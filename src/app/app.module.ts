import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutModule } from "./app-layout/app-layout.module";
import { MatDialogModule } from "@angular/material/dialog";
import { AppDialogModule } from "./shared/dialogs/app-dialog.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppLayoutModule,
    MatDialogModule,
    AppDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
