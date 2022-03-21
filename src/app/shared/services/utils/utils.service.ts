import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  range(from: number, to: number): number[] {
    return [...Array(to).keys()].map(e => e + from)
  }
}
