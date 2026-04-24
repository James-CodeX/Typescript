let score: number | string = 33

score = 44
score = "55"


type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let james: User | Admin = {
    name: "James",
    id: 1
}

james = {username: "JamesBond", id: 1}

// function getDbId(id: number | string) {
//     console.log(`DB id is: ${id}`);
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase() // Error: Object is of type 'string | number'. ts(18048)
    } else {
        id.toFixed() // Error: Object is of type 'string | number'. ts(18048)
    }
}

// array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = [1, "2", 3]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "middle"
seatAllotment = "window"