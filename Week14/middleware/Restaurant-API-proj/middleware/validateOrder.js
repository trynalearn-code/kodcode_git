
function validateOrder(req, res, next){
    const cust = req.body.customer
    const tab = req.body.table
    const item = req.body.items
    if (!cust || !tab || !item){
        return res.status(400).json({
            success: false,
            message: "You are missing a field"
        })
    }
    next()
}
export default validateOrder