// var names = ['Michael', 'Timi', 'Ife'];
// //
// // names.forEach(function (name) {
// //   console.log('forEach', name);
// // });
// //
// // names.forEach((name) => {
// //   console.log('arrowFunc', name);
// // });
// //
// // names.forEach((name) => console.log(name));
//
// // var returnMe = (name) => name + '!';
// // console.log(returnMe('Michael'));
//
// var person = {
//   name: 'Michael',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();
//
// Challenge Area
function add (a, b) {
  return a + b;
}
// console.log(add(1, 3));
// console.log(add(9, 0));

//addStatement
var addStatement = (a, b) => {
  return a + b;
};
// console.log(addStatement(12, 3));
// console.log(addStatement(9, 10));

//addExpression
var addExpression = (a, b) => a + b;
console.log(addStatement(3, -2));
