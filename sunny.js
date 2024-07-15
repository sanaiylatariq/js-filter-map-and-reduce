// // const { log } = require("console")

const { log } = require("console")
const { it } = require("node:test")

// // // filter map and reduce
// // let sunny = ["sanaiyla1", "sanaiyla2", "sanaiyla3","snaiyla4,"]
// //   const sunny1 =             sunny.forEach(
// //     (item)=>{
// //         console.log(item);
// //         return item
// //     }
// // )
// // console.log(sunny1);

// // individual values show nh hoten to faeda nh es loop ka

// const mynumber = [0,1,2,3,4,5,6,7,8,9,10]
// let newno = mynumber.filter((num)=>{return num>5})
// // console.log(newno);

// // console.log(no);

// mynumber.forEach((num)=>{
// if (num>5) {
// newno.push(num)}



// })
// console.log(newno);

// // filter k bjae ap foreach k zrye b filter krskty bs for each mn ap if lgaa len to get desired results
// let numbers = [0,1,2,3,4,]
// let no = numbers.filter((num)=>{return num<10})

// numbers.forEach((num)=>{
//     if (num<10) {
// no.push(num)    }
// })
// console.log(no);


// let myno = [0,1,2,3,4,5,6,7,9]
// let mynos = myno.filter((num)=>{
//     return num>5
// })
// let mynoss = []
// myno.forEach((num)=>{
// if (num>5) {
//     mynoss.push(num)
// }
// })
// console.log(mynoss);

let yours = [0,1,2,3,4,5,6,7,]
let yoursandi = yours.filter((num)=>{
    return num>5
})
// console.log(yoursandi);
let full  = []
yours.forEach((num)=>{
    if (num > 5) {
        full.push(num)
    }
})
// console.log(full);
let dani = [0,1,2,3,4,5,6,7]

let danis = dani.filter((num)=>{
    return num>3
})
// console.log(danis);

let sun = []
dani.forEach((num)=>{
    if (num>3) {
        sun.push(num)
    }
})

// console.log(sun);

let arrays = [0,1,2,3,4,5,6,7,8,9,]
let arrays1 = arrays.filter(
    (item)=>{
      return  item>3
    }
)
// let arrays1 = []
// arrays.forEach(
//     (item)=>{
//         if (item>3) {
//             arrays1.push(item)
//         }
//     }
// )


console.log(arrays1);

let employees = [
    { id: 1, name: 'John Doe', location: 'New York', job: 'Developer' },
    { id: 2, name: 'Jane Smith', location: 'San Francisco', job: 'Designer' },
    { id: 3, name: 'Michael Johnson', location: 'Los Angeles', job: 'Manager' },
    { id: 4, name: 'Emily Davis', location: 'Chicago', job: 'Engineer' },
    { id: 5, name: 'David Brown', location: 'Seattle', job: 'Analyst' },
    { id: 6, name: 'Sarah Wilson', location: 'Boston', job: 'Product Manager' },
    { id: 7, name: 'Kevin Lee', location: 'Austin', job: 'Marketing Specialist' },
    { id: 8, name: 'Laura Martinez', location: 'Miami', job: 'Sales Associate' },
    { id: 9, name: 'Daniel Taylor', location: 'Denver', job: 'Consultant' },
    { id: 10, name: 'Olivia Garcia', location: 'Dallas', job: 'HR Manager' }
];

let employees1 = employees.filter((item)=>{
// return item.id===1 && item.location==='new york'&&item.name==='john doe'
return item.id===7
|| item.name==='martin'
&& item.location==='new york'
})
console.log(employees1);

const myno = [0,1,2,3,4,5,6,7,8,9,10]
const hernums = myno.map(
    (num)=>{
       return num + 10
    }
)
console.log(hernums);
const myno1 = myno.forEach(
    (num)=>{
console.log(num+10);    }
)
console.log(myno1);


// const myno1 = myno.forEach(
//     (num)=>{
//         num+10
//     }
// )
// // console.log(myno);
// console.log(myno1);





// CHAINING,YANI MANY NFILTERS OR MAPS USED EK SATH ,PHLA ACTION PERFORM HOGA PHR NUM YA ITEM YA VALUE K STH AGLA ACTIION PERFORM HOGA







const mynumbers = [0,1,2,3,4,5,6,7,8,9,]

const mynos = mynumbers.map((num)=>{return num*10})
.map((num)=>{return num+10})
.filter((num)=>{return num>=50})
console.log(mynos);

// reduce


let numbers = [1,2,3]
let noos = numbers.reduce((acc,currval)=>{
    console.log(`acc: ${acc} currval:${currval}`);
    return acc + currval
}, 7)
console.log(noos);

let sun0 = [
    {
name:"js course",
price:46,
    },
    {
        name:"cpp course",
        price:460,
            },
            {
                name:"py course",
                price:436,
                    },
                    {
                        name:"java course",
                        price:467,
                            },
                                                
]
let shoppingcart = sun0.reduce((acc,item)=> acc+item.price
,0)
console.log(shoppingcart);