import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageApiService {

  constructor() { }

  setData(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.log('error', error);
    }
  }

  getData(key: string): any {
    try {
      const data = localStorage.getItem(key)
      return data && JSON.parse(data)
    } catch (error) {
      console.log('error', error);
    }
  }
}
