type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean
    creditCardDetails?: number 
}

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myUser: User = {
    _id: "12345",
    name: "Alice",
    email: "alice@example.com",
    isActive: true
}

myUser.email = "alice.new@example.com"