import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  navigateTo(routeArray: string[], extras?: NavigationExtras): void {
    this.router.navigate(routeArray, extras);
  }

  goToHome(extras?: NavigationExtras) {
    this.navigateTo(['/home'], extras);
  }



}
