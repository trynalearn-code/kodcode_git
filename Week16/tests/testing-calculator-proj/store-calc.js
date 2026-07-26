import { totalmem } from "node:os"

export function calculateDiscount(price, percent){
    return price-(price*(percent/100))
}
export function applyTax(price, taxRate){
    return price + price * taxRate
}
export function calculateCartTotal(items){
    let total = 0
    for (const item of items){
        total += item.price * item.quantity
    }
    return total
}
export function validatePrice(price){

}
export function formatPrice(amount){

}