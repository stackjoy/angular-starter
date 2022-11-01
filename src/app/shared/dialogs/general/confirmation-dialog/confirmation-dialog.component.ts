import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface IConfirmationDialogData {
  title?: string,
  text: string,
  button?: { yes?: string, no?: string }
}

@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'confirmation-dialog.component.html',
  styleUrls: ['confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit, OnDestroy {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IConfirmationDialogData,
              private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  cancel() {
    this.dialogRef.close(false);
  }

  confirm() {
    this.dialogRef.close(true);
  }

}

/**
 * Usage:
 * add this to the constructor:
 *    public dialog: MatDialog
 * add this to component:
 *    openDialog(): void {
 *    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data: {}, position: { top: '100px' }, autoFocus: true });
 *    dialogRef.afterClosed().subscribe(result => console.log('dialog result: ', result) );
 *    }
 */

