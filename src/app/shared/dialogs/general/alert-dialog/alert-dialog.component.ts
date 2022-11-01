import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface IAlertDialogData {
  title?: string,
  text: string,
  buttonText?: string;
}

@Component({
  selector: 'alert-dialog',
  templateUrl: 'alert-dialog.component.html',
  styleUrls: ['alert-dialog.component.scss'],
})
export class AlertDialogComponent implements OnInit, OnDestroy {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IAlertDialogData,
              private dialogRef: MatDialogRef<AlertDialogComponent>) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  close() {
    this.dialogRef.close(true);
  }

}

/**
 * Usage:
 * add this to the constructor:
 *    public dialog: MatDialog
 * add this to component:
 *    openDialog(): void {
 *    const dialogRef = this.dialog.open(AlertDialogComponent, { data: {}, position: { top: '100px' }, autoFocus: true });
 *    dialogRef.afterClosed().subscribe(result => console.log('dialog result: ', result) );
 *    }
 */

