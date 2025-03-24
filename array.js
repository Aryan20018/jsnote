

let b = [];
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
// const c=removeDuplicates(arr);
// console.log(c);
// console.log(arr.indexOf(5));
// arr.filter((item,index)=>console.log(item,index))

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }

  return true;
}

const arr = [3, 4, 5, 1, 2];

// console.log(isSorted(arr) ? "True" : "False");
const nums = [3, 4, 5, 1, 2];

var check = function (nums) {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }
  if (nums[n - 1] > nums[0]) {
    count++;
  }

  return count <= 1;
};
