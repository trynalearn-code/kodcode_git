import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {calculateDiscount, applyTax, calculateCartTotal, validatePrice, formatPrice} from './store-calc.js';

describe("calculateDiscount", ()=>{
    it("calculates 10 percent off", ()=>{
        assert.strictEqual(calculateDiscount(100, 10), 90)
    })
    it("gives no discount", ()=>{
        assert.strictEqual(calculateDiscount(100, 0), 100)
    })
    it("gives a free item", ()=>{
        assert.strictEqual(calculateDiscount(100, 100), 0)
    })
})

describe("applyTax", ()=>{
    it("applies normal tax rate", ()=>{
        assert.strictEqual(applyTax(100, .17), 117)
    })
    it("applies duty free", ()=>{
        assert.strictEqual(applyTax(100, 0), 100)
    })
    it("applies no tax to a free item", ()=>{
        assert.strictEqual(applyTax(0, .17), 0)
    })
})