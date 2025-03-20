function orderTea(teaType) {
    function confirmedOrder() {
        return `"Order confrimed for chai"`
    }
    return confirmedOrder()
}
// console.log(orderTea());

function maketea(typeOfTea) {
    return `bol be ${typeOfTea}`
}
function processTeaOrder(teaFunction) {
    return teaFunction("sun be");
}

let order= processTeaOrder(maketea);
// console.log(order);
// num=[2,7,11,15];
// target = 9;
// output=[]
// let twosum=function (num, target) {
// let obj ={};
//   for (let i = 0; i < num.length; i++) {
//    let numneed= target-num[i];
//    if (obj[numneed] !==undefined) {
//     return [obj[numneed],i]
//    }
//    obj[num[i]]=i
// return console.log(numneed);
 

// console.log("h");


function createTeamaker(name) {
    
    return  function (teaType) {
        return `making ${teaType} ${name}`;
    }
}
let teaMake = createTeamaker("le bhai");
let result = teaMake("green tea");
console.log(teaMake);
console.log(teaMake("kk "));
console.log(result);
// console.log(createTeamaker());


