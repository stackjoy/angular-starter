import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ConfirmationDialogComponent, IConfirmationDialogData } from "../../dialogs/general/confirmation-dialog/confirmation-dialog.component";
import { AlertDialogComponent, IAlertDialogData } from "../../dialogs/general/alert-dialog/alert-dialog.component";

@Injectable({ providedIn: "root" })
export class DialogService {

  constructor(public dialog: MatDialog) {
  }

  get open() {
    return this.dialog.open
  }

  openConfirmationDialog(dialogData: IConfirmationDialogData): MatDialogRef<ConfirmationDialogComponent> {
    return this.dialog.open(ConfirmationDialogComponent, { data: dialogData, position: { top: '100px' }, autoFocus: true });
  }

  openAlertDialog(dialogData: IAlertDialogData): MatDialogRef<AlertDialogComponent> {
    return this.dialog.open(AlertDialogComponent, { data: dialogData, position: { top: '100px' }, minWidth: '300px', autoFocus: true });
  }

}
