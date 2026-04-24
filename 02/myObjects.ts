const User = {
    name: "Alice",
    email: "alice@example.com",
    isActive: true
}

function createUser({name, isPaid}: {name: string, isPaid: boolean}): {name: string, isPaid: boolean} {
    return {name, isPaid}
}

createUser({name: "Bob", isPaid: true})

function createCourse(): {name: string, price: number} {
    return {name: "TypeScript", price: 100}
}






export {};