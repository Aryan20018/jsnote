
// let x={
//     flag: 1,
//     toString: function(){
       
//         return this.flag++       
        
//     }
// }


//     if (x==1 && x==2 && x==3) {
//         console.log("aryan");
//         console.log("aryan");
//     }

let a=4;
a++;
a;
a--;
// console.log(a);

console.log("start");

setTimeout(() => {
    console.log("macrotask");
    
}, 0);

async function test() {
    console.log("inside async");
    await new Promise (reslove => {
        setTimeout(reslove,2000)
    });
    console.log("after await");
    
}
test();
