import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogComponent } from './alert-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  declarations: [
    AlertDialogComponent,
  ],
  exports: [
    AlertDialogComponent,
  ],
  entryComponents: [AlertDialogComponent]
})
export class AlertDialogModule {

}
