//1 task
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
    
//            8task


    // let text = 'Dont Be a Menace to South Central While Drinking Your Juice in the Hood'
    //     mtext= text.match(/\b[a-zA-Z]{5,}\b/g)
    //     console.log(mtext.length)   


        const text = 'Dont Be a Menace to South Central While Drinking Your Juice in the Hood'

        const words = text.split(' ')
        const good = words.map((words) => words.length <= 5)
        const count = good.filter (value => value === true).length
        console.log(count)



       const text1 = 'Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale'
       const word = text1.split(' ')
       const another = word.map((word) => word.length <= 5)
       const count1 = another.filter (value => value === true).length
       console.log(count1)


<<<<<<< HEAD
       //extra task 

       const random = (length = 3) => {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
=======


       //extra task 
        



       const random = (length = 3) => {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
>>>>>>> e7febf43deece96f6a41d701d374a77c916a0c7a
        let letters = '';
        for (let i = 0; i < length; i++) {
            letters += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return letters;
    }
        
       console.log(random(3))