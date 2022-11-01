import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  getItem(name: string) {
    let item = null;
    try {
      item = JSON.parse(localStorage.getItem(name));
    } catch (e) {
      console.warn('Error parsing local storage item: ', name, e);
    }
    return item;
  }

  setItem(name: string, data: any) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  removeItem(name: string) {
    localStorage.removeItem(name);
  }
}
