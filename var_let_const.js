/*
 VAR and hoisting
*/

// ( () => {
//     var i;
//     for(i = 0; i < 10 ; i++) {
//         console.log(i);
//     }
//     console.log('after loop', i); // 10
    
// })();
// console.log('after function', i);  //ReferenceError

/*
HOISTING can be horrible
*/

//  "use strict" // solution
// counter = ( () => {
//     for(i = 0; i < 10 ; i++) {
//         console.log(i);
//     }
//     console.log('after loop', i); // 10
// })();
// console.log('after function', i); // 10


/* 
more VAR examples
*/
// var i = 99999999;
// counter = ( () => {
//     for(i = 0; i < 10 ; i++) {
//         console.log(i);
//     }
//     console.log('after loop', i); // 10
// })();
// console.log('after function', i); // 10

/* 
LET
*/

// var i = 999999;
// counter = ( () => {
//     for(let i = 0; i < 10 ; i++) {
//         console.log(i);
//     }
//     console.log('after loop', i); // 999999
// })();
// console.log('after function', i);  // 999999

// var i = 999999;
// counter = ( () => {
//     for(let i = 0; i < 10 ; i++) {
//         console.log(i);
//     }
//     if (true){
//         i = 88888;
//     }
//     console.log('after loop', i); // 88888
// })();
// console.log('after function', i);  // 88888

// var i = 999999;
// counter = ( () => {
//     for(let i = 0; i < 10 ; i++) {
//         console.log(i);
//     }
//     if (true){
//         var i = 88888;
//     }
//     console.log('after loop', i); // 88888
// })();
// console.log('after function', i);  // 999999

// var i = 999999;
// counter = ( () => {
//     for(let i = 0; i < 10 ; i++) {
//         console.log(i);
//     }
//     if (true){
//         let i = 88888;
//     }
//     console.log('after loop', i); // 88888
// })();
// console.log('after function', i);  // 999999

/*
CONST
*/

// const x = 1;
// x = 2;
// console.log(x);

// const x = {
//     y: 5
// }
// x.y = 6;
// console.log(x);

// const x = {
//     y: 5
// }
// x = {
//     z: 10j
// }
// console.log(x);