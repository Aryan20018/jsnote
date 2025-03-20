// const greeting = "Hello world!"
// for (const greet of greeting) {
//     if (greet === "" ) {
//         break;
//     }
//     console.log(`Each char is ${greet}`);
    
// }
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const num= myNums.filter( (num) => num> 4 )
//  console.log(num);

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         console.log(num)
//     }
// } )

// node
// console.log( myNums[myNums.length -1]);
// console.log(1);

// let sum=0,i=1 ;

// while (i<=5) {
//     sum=sum+i;
//     console.log(sum);
//     i++;  
// }
// return console.log(sum);

// let countdown =[];
// let i=5;
// while (i>=1) {
//     countdown.push(i);
//     i--;
// }
// console.log(countdown);

// prompt(`enter your fav `) browser things
// let total=0;
// let i=1;
// do {
//     total=total+i;
//     i++;
// } while (i<=3);
// console.log(total);

// let multipliedNumbers=[];
// let num=[2,4,6]
// 3 

// for (let i = 0; i < num.length; i++) {
//    arr=num[i]*2;
//    multipliedNumbers.push(arr);
//    console.log(multipliedNumbers);
    
// }
// console.log(multipliedNumbers);

// let cityList=[];
// let arry=["Paris","new York","tokyo","londin"];

// for (let j = 0; j < arry.length; j++) {
//     city=cityList.push(arry[j]);
    
// }
// console.log(city);

// let tea=["green tea","black tea","chai","oolong tea"];
// let seletedtea=[];

// for (let k = 0; k < tea.length; k++) {
   
//     if (tea[k]!="chai") {
//         seletedtea.push(tea[k]);
//     }else
//    {break;} 
// }
// console.log(seletedtea);

let visitegcities=[];
let city=["berlin","Paris","new York","tokyo","londin"]

for (let l = 0; l < city.length; l++) {
   if (city[l]==="Paris") {
    continue;
   }
    visitegcities.push(city[l])
}
// console.log(visitegcities);
let populations={};
let citiespo={
    
    "Paris":1342563,
    "new York":323,"berlin":1324,
    "tokyo":134253645,
    "londin":1256
}
// for (const city in citiespo) {
//    if (city==="berlin") {
//     break
//    }
//  console.log(Object.values(citiespo));
// }
// for (const city in citiespo) {
//     if (city==="berlin") {
//         break;
//     }
//     console.log(city);
//     populations[city]=citiespo[city];
// }
// console.log(populations);

let wcities={
    sydney:5,
    tokyo:9,
    berlin:3,
    paris:2
}
// let largecities={}
// for (const city in wcities) {
   
//    if (wcities[city]<3) {
//     break;
//    }
//    largecities[city]=wcities[city];
// }
// console.log(largecities); 

let teacollection=["earl grey","green tea","chai","pp"]
let availableteas=[];
teacollection.forEach(function(tea) {
    if (tea==='chai') {
        return 
    }
     availableteas.push(tea)
});
// console.log(availableteas);
let cities=["berlin","Paris","new York","tokyo","sydney","londin"]
let traveledcities=[];
cities.forEach(city => {
    if (city==='sydney') {
       return; 
    }
    traveledcities.push(city)
});
// console.log(traveledcities);


let arr=[2,5,7,9,1,3]
let doubledNumbers=[]

for (let p = 0; p < arr.length; p++) {
    if (arr[p]===7) {
        continue
    
    }
   
   doubledNumbers.push(arr[p]*2)
    
}
console.log(doubledNumbers);


let myTeas=["earl grey","green tea", "jasmine tea", "chai","pp"]
let shortTea=[];

for (const tea of myTeas) {
    if (tea.length>10) {
        continue;
    }
    shortTea.push(tea);
}
console.log(shortTea);

