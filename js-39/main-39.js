// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// const person = {
//     name: "Ivan",
//     surname: "Ivanov",
//     patronymic: "Ivanovich"
// };
// console.log(person)

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// function isEmpty (obj){
//     return Object.keys(obj).length === 0;
// }

// const user = {
// name: "Ivan",
// surname: "Ivanov",
// patronymic: "Ivanovich"
// }; 

// console.log(isEmpty(user))

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// const task = {
//     title: "title",
//     description: "description",
//     isCompleted: false,
// };

// function cloneAndModify(object, modifications) {
//     return { ...object, ...modifications };
// }

// const modifications = { title: "Updated Title", isCompleted: true };
// const result = cloneAndModify(task, modifications);

// for (let key in result) {
//     console.log(`${key}: ${result[key]}`);
// }


// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

function callAllMethods (object){
    for ( const key in object ){
        if ( typeof object[key] == "function" ){
            object[key]()
        }
    }
}

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

callAllMethods(myObject);