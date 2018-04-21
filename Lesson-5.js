//1. Задание

/*var n = 13;
var arr = new Array(n);

for (var i = 0; i < arr.length; i++) {
	arr[i] = Math.floor(Math.random() * 120) + 40;
}
console.log(arr);

if (arr.length % 2 !== 0) {
	k=arr.length-2;
} else {
	k=arr.length-1;
}
	
for (var i = 0; i < k; i+=2) {
	
	buff = arr[i];
	arr[i] = arr[i + 1];
	arr[i + 1] = buff;
}


console.log(arr);
*/




//2 Задание
var n=5;
var m=5;
var arr= new Array (n);

//заполняем массив
for (var i = 0; i < arr.length; i++) {
	arr[i] = new Array(m);
}

for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
		arr[i][j] = Math.floor(Math.random() * 10) + 0;
		document.write(arr[i][j]+' ');
	}
	document.write('<br/>');
}

//предполагаем і=0 макс и мин сумма	
var i=0;
sum=0;
	for (var j = 0; j <arr[i].length; j++) {
		sum=sum+arr[i][j];
	}
	sumMin=sum;
	sumMax=sum;
	iMin=iMax=0;		
	
	
// вычисляем сумму для всех рядов и сравниваем с суммой і=0
for (var i = 1; i < arr.length; i++) {
sum=0;	
	for (var j = 0; j <arr[i].length; j++) {
		sum+=arr[i][j];
	}

	if (sum<sumMin) {
		sumMin=sum;
		iMin=i;
	}

	if(sum>sumMax) {
		sumMax=sum;
		iMax=i;
	}
}
console.log('sumMin: '+sumMin);
console.log('iMin: '+iMin);

console.log('sumMax: '+sumMax);
console.log('iMax: '+iMax);

// меняем ряды iMin и iMax местами
buff = arr[iMin];
arr[iMin]=arr[iMax];
arr[iMax]=buff;

console.log(arr);