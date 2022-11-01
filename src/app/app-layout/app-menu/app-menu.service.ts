import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AppMenuService {
  public menuOpen: boolean = false;
  public menuOpen$: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.broadcastMenuState();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.broadcastMenuState();
  }

  openMenu() {
    this.menuOpen = true;
    this.broadcastMenuState();
  }

  closeMenu() {
    this.menuOpen = false;
    this.broadcastMenuState();
  }

  private broadcastMenuState() {
    this.menuOpen$.next(this.menuOpen);
  }

}
