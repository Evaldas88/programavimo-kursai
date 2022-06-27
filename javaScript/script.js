
//      1 task
// const firstname = 'keanu'
// const lastname = 'Reeves'

// if (firstname < lastname ){
//     console.log(firstname)

// } else {
//     console.log(lastname)
// }






//          2 task
// let firstname = 'Keanu'
// let  lastname = 'Reeves'


// firstname = firstname.toUpperCase()
// console.log(firstname)

// lastname =lastname.toLowerCase()
// console.log(lastname)





//              3task

// let firstname = 'Keanu'
// let lastname = 'Reeve'
// let  z = firstname.charAt(0) + lastname.charAt(0)
// console.log(z)



//              4task


// let firstname = 'Keanu'
// let lastname = 'Reeve'
// let  z = firstname.slice(-3) + lastname.slice(-3)
// console.log(z)



//              5task


// let text = 'Once upon a time in hollywood'

// newtext = text.replaceAll(/[oO]/g, '*' )
// console.log(newtext)




//              6task


// let text = 'Once upon a time in hollywood'

// newtext = text.match(/[oO]/g) 
// console.log(newtext.length)


//              7 task

    // let text = 'An American in Paris'

    // ntext = text.replace(/[aeiou]/gi, '')

    // console.log(ntext)

    // let text1 = 'Breakfast at Tiffany'

    // n1text = text1.replace(/[aeiou]/gi, '')

    // console.log(n1text)
    
    // let text2 = 'A2001: A Space Odyssey'

    // n2text = text2.replace(/[aeiou]/gi, '')

    // console.log(n2text)


    // let text3 = 'It`s a Wonderful Life'

    // n3text = text3.replace(/[aeiou]/gi, '')

    // console.log(n3text)
    
//                      8task


    let text = 'Dont Be a Menace to South Central While Drinking Your Juice in the Hood'
        mtext= text.match(/\b[a-zA-Z]{5,}\b/g)
        console.log(mtext.length)   