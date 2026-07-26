import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {calculateDiscount, applyTax, calculateCartTotal, validatePrice, formatPrice} from './store-calc.js';

describe("calculateDiscount", ()=>{
    it("calculates 10 percent off", ()=>{
        assert.strictEqual(calculateDiscount(100, 10), 90)
    })
})