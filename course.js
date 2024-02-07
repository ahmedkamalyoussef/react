
// for(let i=1;i<=27;i++){
// 	if(i%5==0){
// 		if(i%3==0){
// 			console.log("fezz buzz");
// 			break;
// 		} 
// 		console.log("buzz");
// 	} 
//     if(i%3==0) console.log("fezz");
// }

// function fz(num1,num2){
// 	for(let i=num1;i<=num2;i++){
// 		if(i%5==0){
// 			if(i%3==0){
// 				console.log("fezz buzz");
// 				break;
// 			} 
// 			console.log("buzz");
// 		} 
// 		if(i%3==0) console.log("fezz");
// 	}
// }
// fz(1,27);

// function asterisks(num){
// 	for (let i = 1; i <= num; i++) {
// 		let spaces = '';
// 		for (let j = 1; j <= num; j++) {
// 			if (j <= num - i) spaces += ' ';
// 			else spaces += '*';
// 		}
// 		console.log(spaces);
// 	}
// }
// asterisks(7);

// function  fac(num){
// 	if(num==1) return 1;
// 	else return num*fac(num-1);
// }
// console.log(fac(5));


// function ran(num){
// let fourthNum = 0,check = false;
// for (let i = 0; i <= num; i++) {
//   for (let j = 0; j <= num; j++) {
//     for (let k = 0; k <= num; k++) {
//       if (i != j && j != k && k != i) {
//         fourthNum = num - (i + j + k);
// 		if(fourthNum + i + j + k==100){

// 			console.log(fourthNum + " " + i + " " + j + " " + k);
// 			check = true;
// 		}
//       }
//       if (check == true) {
//         break;
//       }
//     }
//     if (check == true) {
//       break;
//     }
//   }
//   if (check == true) {
//     break;
//   }
// }
// }
// ran(100);

// function bubbleSort(arr) 
// {  
// 	let flag =false;

// 	for(let i=0;i<arr.length - 1 ;i++)
// 	{
// 	  for (let j = 0; j < arr.length - i - 1; j++) 
// 	  {
// 		if (arr[j] > arr[j+ 1]) 
// 		{	 
// 		  [arr[j], arr[j + 1]] =[arr[j+1],arr[j]];
// 		  flag = true;
// 		}
// 	  }	
//    if(flag == false)
// 	{
// 		console.log("Array is already Sorted...");
// 		break;
// 	}
// 	}

// 	return arr;

// }

// console.log(bubbleSort([5,6,1,7,4]));
// console.log(bubbleSort([1,2,4,5,6]));
////////////////////
// function bubbleSortRecursive(arr, i = 0, swapped = false) {
//     if (i === arr.length - 1) {
//         if (swapped) {
//             return bubbleSortRecursive(arr, 0, false);
//         } else {
//             return arr; 
//         }
//     }

//     if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
//         swapped = true;
//     }

//     return bubbleSortRecursive(arr, i + 1, swapped);
// }
//   console.log(bubbleSortRecursive([1, 6, 5, 4, 3, 2, 0]));

// ////////////////////////////////////////////////
// function fibonacciRecursive(n) {
// 	if (n < 0) {
// 	  return "Please Enter A positive Index";
// 	} else if (n == 0) {
// 	  return 0;
// 	} else if (n == 1) {
// 	  return 1;
// 	} else {
// 	  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// 	}
//   }

//   console.log(fibonacciRecursive(3));
// /////////////////////////////////////
//   function fibonacciIterative(n) {
// 	if (n < 0) {
// 		return "Please Enter A positive Index";
// 	} else if (n === 0) {
// 	  return 0;
// 	} else if (n === 1) {
// 	  return 1;
// 	} else {
// 	  let fib = [0, 1];
// 	  for (let i = 2; i <= n; i++) {
// 		let next = fib[i - 1] + fib[i - 2];
// 		fib.push(next);
// 	  }
// 	  return fib[n];
// 	}
//   }
//   console.log(fibonacciIterative(3));





class Shape {
    constructor() {}
    area(h, w) {
      console.log("area of shape is : ", Number(h * w));
    }
    permeiter(h, w) {
      console.log("permeiter of shape is : ", Number(h + w + h + w));
    }
  }
  
  class Rectangel extends Shape {
    constructor(h, w) {
      super();
      this.h = h;
      this.w = w;
    }
    print_rectangel() {
      for (let i = 0; i < this.h; i++) {
        console.log(" *".repeat(this.w));
      }
    }
  }
  
  class Square extends Rectangel {
    constructor(h) {
      super(h, h);
    }
    print_square() {
      for (let i = 0; i < this.h; i++) {
        console.log(" *".repeat(this.h));
      }
    }
  }
  
  var r = new Rectangel(5, 10);
  r.print_rectangel();
  console.log("Area: " + r.area(5, 10));
  console.log("Perimeter: " + r.permeiter(5, 10));
  
  var s = new Square(6);
  s.print_square();
  console.log("Area: " + s.area(6, 6));
  console.log("Perimeter: " + s.permeiter(6, 6));