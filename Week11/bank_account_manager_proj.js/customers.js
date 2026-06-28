import { idCreater } from "./id_maker.js"

const customers = []

const generateID=idCreater()

function createCustomer(fullName, accountType, balance)  {
    if (!fullName){
        return "You must enter a full name"
    }
    if (balance < 0){
        return "Your balance must be positive"
    }
    const allowed = ["regular","premium","student"]
    if (!allowed.includes(accountType.toLowerCase())){
        return "Your account type must be regular, premium or student"
    }
    console.log("Customer Created successfully")
    return {
        id:generateID(),
        fullName:fullName,
        accountType:accountType,
        balance:balance,
        isActive:true
    } 
}



function showCustomers(){
    return customers
}

function deposit(id, amount){
    if (amount<=0){
        return "Sorry, your amount must be greater than 0"
    }
    const user = customers.find(c => c.id === id);
    if (!user){
        return "Your customer's id doesn't exist"
    }
    if (user.isActive==false){
        return "sorry, your account has been closed"
    }
    user.balance += amount
    return "deposit completed successfully"
}

function withdraw(id, amount){
    if (amount<0){
        return "Your amount must be positive"
    }
    const user = customers.find(c => c.id === id)
    if (!user){
        return "Sorry, your customer's id doesn't exist"
    }
    if (user.isActive==false){
        return "sorry, your account has been closed"
    }
    if (user.balance>= amount){
        user.balance -= amount
        return "withdraw successful"
    }
    return "Withdraw failed. Sorry, not enough money in the account"
}

function searchById(id){
    const user = customers.find(c => c.id === id)
    return user
}
function searchByName(fullName){
    const user = customers.find(c => c.fullName.trim().toLowerCase() === fullName.trim().toLowerCase())
    return user
}

function closeAccount(id){
    const user = customers.find(c => c.id === id)
    user.isActive = false
    return "Account closed succcessfully"
}

function showStatistics(){
    console.log("==== Statistics ====")
    const totalCustomers = customers.length
    console.log("Total Customers: " + totalCustomers)
    const totalActiveAccounts = customers.filter(acc => acc.isActive === true).length
    console.log("Active accounts: " + totalActiveAccounts)
    const totalBalance = customers.reduce((sum, customer)=> (sum +customer.balance), 0)
    console.log("Total Balance:" + totalBalance)
    const averageBalance = totalBalance/totalCustomers
    console.log("Average Balance: " +averageBalance)
    customers.sort((a,b) => b.balance - a.balance)
    console.log("Highest balance: " + customers[0])
}

const c1 = eCustomer("")("John", "student", 42322);
const c2 = creat

customers.push(c1)

// showStatistics()
// console.log(closeAccount(1))
// console.log(withdraw(1,30))
console.log(showCustomers())
// console.log(searchByName("john "))
// showStatistics()