const O = new Object();
O.name = "Mohib"
O.lastName = "Arsala"
O.isTeaching = true
O.greet = function() {
    console.log("Hi, Mohib How is it going? ");
}

console.log(O);

const O2 = {}
O.firstName = "Shakib"
O["lastName"] = "Arab"
const key = "isTeaching"
O[key] = true
O["greet"] = function() {
    console.log("Hi, Shakib are you intrested to play clicket at weekend");
}

console.log(O2);

const O3 = {
    firstName: "Nazif", 
    latName: "Arab",
    isTeaching: true,
    greet: () => {
        console.log("Hi, Nazif are your going to play Cricket this weeekend Shakib is coming too");
    }, 
    address: {
        Number: 2345,
        Street: "Confideration PKWY",
        State: "Mississauga, ON",
        Country: "CA",
    }
}

console.log(O3);


const b = {
    a: "a",
    d: "d",
}

const b2 = Objdect.assign({}, b);

