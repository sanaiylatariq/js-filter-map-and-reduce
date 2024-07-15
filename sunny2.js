let prices = [
    {
        course:"js course",
        price:345
    },
    {
        course:"java course",
        price:340
    },
    {
        course:"py course",
        price:345
    },
    {
        course:"cpp course",
        price:345
    },


]
let sunny = [1,2,3,45,5]
let total = sunny.map((num)=>{
    return num+20
}).filter((num)=>{
    console.log( num *20)
})
console.log(total);