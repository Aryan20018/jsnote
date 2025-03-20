nums=[2,7,11,15];
target = 9;
output=[]
// let twosum=function (num, target) {
// let obj ={};
//   for (let i = 0; i < num.length; i++) {
//    let numneed= target-num[i];
//    if (obj[numneed] !==undefined) {
//     return [obj[numneed],i]
//    }
//    obj[num[i]]=i
// return console.log(numneed);
 
// }

// }
// console.log(twosum);

// console.log("h");
var twoSum = function (nums, target) {

    let indx = [];
    for (let i = 0; i < nums.length; i++) {
         for(let j = i+1; j < nums.length; j++){
            if ((nums[i]) + (nums[j]) == target) {
                indx = [i, j];
            }
        }
    }
   return console.log(indx);;
};
// twoSum([2,4,5,6,7,8,1,],9);
var isPalindrome = function(x) {
    let rev=0;
    
        
   
     
      
};
isPalindrome(121)




