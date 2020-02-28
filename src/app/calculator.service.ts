import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  add(a: number, b: number) {
    return a + b;
  }
 
  lowerOrZero(numbers: number[]) {
    if (numbers == null) { return 0; }
    if (numbers.length === 0) { return 0; }
 
    const result = Math.min(...numbers);
    return result < 0 ? 0 : result;
  }
}
