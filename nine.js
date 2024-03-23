const arr = [1,2,999,56,"Mithun",1234,"PW"]
let n = arr.length
for(let i=0;i<n;i++){
    if(typeof arr[i] == "string"){
        console.log("Found the first string : " , arr[i]);
        break
    }
}