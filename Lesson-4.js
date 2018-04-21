
// 1.
console.log(window.n);
var n = 20;
console.log(window.n);

var A = new Array(n);
var B = [];
var B1 = [];

for (var i = 0; i < A.length; i++) {
	A[i] = Math.floor(Math.random() * 120) + 40;
}
console.log(A);


//находим простые числа и записываем в массив В

for (var i = 0; i < A.length; i++) {
k=true;
	for (var j = 2; j < A[i]; j++) {
		if (A[i] % j == 0) {
			k=false;
			break;
		}

	}
	if (k) {
		B.push(A[i]);
	}
	

}
console.log(B);


/*

for (var i = 0; i < A.length; i++) {
	for (var j = 2; j < A[i]; j++) {
		if (A[i] % j == 0) {
			break;
		}
	}
	if (j === A[i]) {
		B1.push(A[i]);
	}

}
console.log(B1);


//найти макс и мин значение в массиве
min = max = A[0];
posMin = posMax = 0;
for (var i = 0; i < A.length; i++) {
	if (A[i] < min) {
		min = A[i];
		posMin = i;
	}

	if (A[i] > max) {
		max = A[i];
		posMax = i;
	}
}
console.log(min);
console.log('posMin: ' + posMin);
console.log(max);
console.log('posMax:' + posMax);

//Элементы массива между min -- max записать в массив B1;
b1 = [];
if (posMin < posMax) {
	b1 = A.slice(posMin, posMax+1);
} else {
	b1 = A.slice(posMax, posMin+1);
}

console.log(b1);

//В массиве A поменять местами min и max. Массив взять из 2го задания
console.log(A);


buff = A[posMin];
A[posMin] = A[posMax];
A[posMax] = buff;
console.log(A);





//4.Перевернуть массив не используя метод reverse()
n = 10;
arr = new Array(n);
for (var i = 0; i < arr.length; i++) {
	arr[i] = Math.ceil(Math.random() * 20) - 5;
}
console.log(arr);
center= Math.ceil(arr.length / 2);
for (var i = 0; i < center; i++) {
	buff=arr[i];
	arr[i]=arr[arr.length-1-i];
	arr[arr.length-1-i]=buff;
}
console.log(arr);
*/
//Перевернуть массив - тоже намучено, давайте попроще))
//arr[2 * n - 1] = 0;
//for (var i = n - 1, j = n; i >= 0, j < 2 * n; i--, j++) {
	//arr[j] = arr[i]
//}
//arr = arr.splice(n, n);
//console.log(arr);


/*
//5.Количество элементов в заданном массиве, отличающихся от минимального на 5.
n=30;
arr= new Array(n);
for (var i = 0; i < arr.length; i++) {
	arr[i]=Math.floor(Math.random()*40)-9;
}
console.log(arr);

//находим мин значение
min = arr[0];
for (var i = 0; i < arr.length; i++) {
	if(arr[i]<min) {
		min = arr[i];
	}
}
console.log('min: ', min);

//находим количество элементов, что +_5 от мин.
n=0;
for (var i = 0; i < arr.length; i++) {
	if(arr[i] == min-5 || arr[i] == min+5) {
		n+=1;
	}
}
console.log(n);
*/