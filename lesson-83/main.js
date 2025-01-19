/*
1)
let myDescription = {
    name: "Sergey",
    age: 31,
    isAdmin: true
}
2)
let Users = {
    sayHello: function(name){
        console.log(`Hello ${name}`)
    },
}
users.sayHello('Tom')  
3) 
let users = [
    {
    name: 'Sergey',
    age: 31,
    isAdmin: false
    },
    {
    name: 'alex',
    age: 36,
    isAdmin: false
    },
    {
    name: 'ivan',
    age: 26,
    isAdmin: true
    },
    {
    name: 'jone',
    age: 26,
    isAdmin: false
    },
    
]
let simpleUserCount = 0;
for(let i= 0; i < users.length; i++){
    if (!users[i].isAdmin) { 
        simpleUserCount++;
    }
} 
console.log(simpleUserCount); */