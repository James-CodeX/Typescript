interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrial: () => string;
    startTrial(): string;
    getCoupon(couponName: string, discount: number): number;
}

interface User {
    githubToken: string;
}

interface Admin extends User {
    role: "admin" | "ta" | "learner";
}

const  james : Admin = {
    dbId: 1,
    email: "james@james.com",
    userId: 1,
    googleId: "google123",
    githubToken: "github123",
    role: "learner",
    startTrial: () => { return "Trial started"; },
    getCoupon: (name: "james5", discount: 5) => { return 10; }
}

james.email = "j@j.com"
// james.dbId = 2 // Error: Cannot assign to 'dbId' because it is a read-only property. 