
const validStatus = [ "active",
    "retired",
    "missing",
    "deceased"]
export function validator(data){
    if (!data.codeName || !data.powers){
        return "Error. You must enter data"
    }
    else if (typeof data.codeName !== "string") return "Error. You must enter a string"
    else if (typeof data.threatLevel !== "number") return "Error. threat Level must be a number"
    else if (data.threatLevel >10 || data.threatLevel<1) return "Error. Your threat Level must be between 1-10"
    else if (data.status && !validStatus.includes(data.status)){
    return "Error. Your status must be  active, retired, missing or deceased"}
    else if (!Array.isArray(data.powers)) return "Error. Your powers must be an array"
    else return true
}