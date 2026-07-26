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

describe("calculateCartTotal", ()=>{
    it("calculates the cart total", ()=>{
        assert.strictEqual(calculateCartTotal([{ price: 4, quantity: 5 }, { price: 3, quantity: 1 }]), 23)
    })
    it("returns 0 for the empty cart", ()=>{
        assert.strictEqual(calculateCartTotal([]), 0)
    })
    it("calculates one item in the cart", ()=>{
        assert.strictEqual(calculateCartTotal([{ price: 3, quantity: 1 }]), 3)
    })
})

describe("validatePrice", ()=>{
    it("validates regular price", ()=>{
        assert.doesNotThrow(()=>{
            validatePrice(100)
        })
    })
    it("allows 0", ()=>{
        assert.doesNotThrow(()=>{
            validatePrice(0)
        })
    })
    it("throws an error for a negative price", ()=>{
        assert.throws(()=>{
            validatePrice(-100)
        })
    })
    it("must be a number", ()=>{
        assert.throws(()=>{
            validatePrice("hey")
        })
    })
})

describe("formatPrice", ()=>{
    it("format decimal price", ()=>{
        assert.strictEqual(formatPrice(49.9), `₪49.90`)
    })
    it("format whole price", ()=>{
        assert.strictEqual(formatPrice(100), `₪100.00`)
    })
    it("format zero price", ()=>{
        assert.strictEqual(formatPrice(0), `₪0.00`)
    })
})