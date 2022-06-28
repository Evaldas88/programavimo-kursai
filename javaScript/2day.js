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





// // 4task

function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min)
}

     a = getRandomInt(0, 3);                                               
     b = getRandomInt(0, 3);
     c = getRandomInt(0, 3);
     d = getRandomInt(0, 3);

        let counter0 = 0
        let counter1 = 0
        let counter2 = 0
        console.log(a)

     
        if(a === 0){
        counter0++
    }
    else if(a === 1){
        counter1++
    }
    else(a === 2)
        counter2++

   
    console.log('Nuliu '+ counter0, 'Vienetu ' + counter1, 'dvejetu ' + counter2 )







    // for (let i = 0; i < a; i++) {
    //     if(a === 0){
    //     counter0++
    // }
    // else if(a === 1){
    //     counter1++
    // }
    // else(a === 2)
    //     counter2++

    // {if(a === 0){
    //     counter0++
    // }
    // else if(a === 1){
    //     counter1++
    // }
    // else(a === 2)
    // counter2++
    
    // }
    
  
    
    // console.log('Nuliu '+ a, 'Vienetu ' + counter1, 'dvejetu ' + counter2 )



    //  5 task



//     function getRandomInt(min, max){
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max-min) + min)
// }
 
//     let a = getRandomInt(1, 6)
        
//     document.getElementById("place").innerHTML = a