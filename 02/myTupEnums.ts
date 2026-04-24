let rgb: [number, number, number] = [255, 0, 0]

type User = [number, string]


const newUser: User = [1, "John"]

newUser[1] = "Jane"
// newUser[1] = 1234 // Error: Type 'number' is not assignable to type 'string'. ts(2322)


export {}