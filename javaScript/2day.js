//1task

// const Firstname = 'Evaldas '
// const Lastname = 'Skackauskas'
// const birthdate = '1990'
// const today = '2022'

// const age = today - birthdate

// document.getElementById("age").innerHTML = ' Aš esu ' + Firstname + Lastname + ". " + 'Man yra ' + age + 'metai.'



// //2task

// function getRandomInt(min, max){
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max-min) + min)
// }
 
// let a = getRandomInt(0, 5)
// let b = getRandomInt(0, 5)

// console.log(a + " "  +b)


// if(a > b) {

//     console.log(Math.round((a/b) *100) /100)

// }else if(a<b){

//     console.log(Math.round((b/a) *100) /100)
// }
// else{
//     console.log('tie')
// }


// // 3task
// function getRandomInt(min, max){
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max-min) + min)
// }
 

// let c = getRandomInt(0, 26);
// let d = getRandomInt(0, 26);
// let e = getRandomInt(0, 26);

// function middle( c, d, e){
//         if(c>d){
//             if(d>e)
//                 return d;
//             else if(c>e)
//                 return e;
//             else 
//                 return c;
//         }
//         else {
//             if (c>e)
//                 return c;
//             else if(d>e)
//                 return e;
//             else
//             return d;
//         }
        
//     }
//     console.log(middle( c, d, e))


// 4task

function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min)
}
const first = getRandomInt(0, 3);


const second = getRandomInt(0, 3);

const third = getRandomInt(0, 3);

const count = first + second  + third



for(const i = 0; i < count.length; ++i)
{   
}
console.log(count)