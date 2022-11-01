import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService } from "../../shared/services/util/dialog.service";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private dialogService: DialogService) {

  }

  ngOnInit() {
    this.dialogService.openAlertDialog({ text: 'aaaaaa' })
  }

  ngOnDestroy() {

  }
}
