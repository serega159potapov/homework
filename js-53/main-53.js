// Задание 1.
// Дан массив пользователей:
const users = [
    { name: "Alex", age: 24, isAdmin: false },
    { name: "Bob", age: 13, isAdmin: false },
    { name: "John", age: 31, isAdmin: true },
    { name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
users.push ({ name: 'Ann', age: 19, isAdmin: false },
{ name: 'Jack', age: 43, isAdmin: true });
console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, 
// напишите функцию getUserAverageAge(users), 
// которая возвращает средний возраст пользователей.
function getUserAverageAge(users) {
    if (users.length === 0) return 0;
    let sum = 0
    users.forEach(function(user) {
        sum +=user.age
    }
    )    
return  sum / users.length 
}
console.log(getUserAverageAge(users))

// Задание 3.
// Используя массив пользователей users из предыдущего задания,
// напишите функцию getAllAdmins(users), 
// которая возвращает массив всех администраторов.

function getAllAdmins(users){
    const admins = [];
    users.forEach(function(user) {
        if (user.isAdmin === true) {
            admins.push(user);
        }
    });
    return admins;
}
console.log(getAllAdmins(users))

// Задание 4.
// Напишите функцию first(arr, n), 
// которая возвращает первые n элементов массива. 
// Если n == 0, возвращается пустой массив [], если n == undefined, 
// то возвращается массив с первым элементом.

function first(arr, n){
    if (n === undefined) {
        return arr.length > 0 ? [arr[0]] : [];
    } else if (n === 0 ){
        return []
    } else {
        let result = [];
        for ( let i = 0; i < n && i < arr.length; i++){
            result.push(arr[i])
        }
        return result
    }
}
console.log(first([ 1, 2, 3, 4], 2))