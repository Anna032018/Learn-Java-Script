// 1.
var n = 20;
var A = new Array(n);
var B = [];


for (var i = 0; i < A.length; i++) {
	A[i] = Math.floor(Math.random() * 120) + 40;
}
console.log(A);


//находим простые числа и записываем в массив В

for (var i = 0; i < A.length; i++) {
isPrimeNumber=true;
	for (var j = 2; j < A[i]; j++) {
		if (A[i] % j == 0) {
			isPrimeNumber=false;
			break;
		}

	}
	if (isPrimeNumber) {
		B.push(A[i]);
	}
	

}
console.log(B);




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