let children = 2
let adults = 1
let seniors = 1

let totalval = 0
if(children  > 0){
    totalval = totalval + children*100
}
if(adults > 0){
    totalval = totalval + adults*150
}
if(seniors > 0){
    totalval = totalval + seniors*120
}

console.log("Total price for tickets : ")
console.log(totalval)