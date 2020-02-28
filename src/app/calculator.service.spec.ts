import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService simple test', () => {
  let service: CalculatorService;
 
  beforeEach(() => {
    service = new CalculatorService();
    console.log('creation...');
  });
 
  // tests de add
  describe('add', () => {
    it('should return correct answer', () => {
      const result = service.add(4, 2);
 
      expect(result).toBe(6);
    });
  });
 
  // tests de lowerOrZero
  describe('lowerOrZero', () => {
    it('Should answer 0 for null', () => {
      const result = service.lowerOrZero(null);
      expect(result).toBe(0);
    });
 
    it('Should answer correct answer', () => {
      const result = service.lowerOrZero([2, 1, 3]);
      expect(result).toBe(1);
    });
 
    it('Should answer 0 if negative', () => {
      const result = service.lowerOrZero([2, 1, -3]);
      expect(result).toBe(0);
    });
  });
});
