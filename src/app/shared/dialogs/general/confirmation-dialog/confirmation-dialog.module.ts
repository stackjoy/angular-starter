import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
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
    ConfirmationDialogComponent,
  ],
  exports: [
    ConfirmationDialogComponent,
  ],
  entryComponents: [ConfirmationDialogComponent]
})
export class ConfirmationDialogModule {

}
