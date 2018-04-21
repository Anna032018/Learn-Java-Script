//1.Написать функцию заполнения двумерного массива. Имя произвольное.

function fillArr(n){
	var arr = new Array(n);

	for (var i=0; i<arr.length; i++){
		arr[i] = new Array(n);
	}

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			arr[i][j] = Math.floor(Math.random()*50)-20;
		}
	}
return arr;
}

console.log(fillArr(5));//проверка работы



// 2. написать функцию, которая примет как аргумент(параметр) два массива и сравнить 
//суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.

function calculSumArr(arr){      //функция нахождения суммы числовых знач.массива
	sum=0;
	for (var i = 0; i < arr.length; i++) {
		if (!isNaN(arr[i])) {
			sum+=arr[i]
		}
	}
	return sum;
}
console.log (arr1=[2,3,-9, , null]);
console.log(calculSumArr(arr1));


function compareArrays (arrX, arrY){  //ф-ция сравнения сумм и выбод массива с большой суммой
	return (calculSumArr(arrX)>calculSumArr(arrY))? arrX: arrY;
}

arr1=[1,2,3,4,5];     //проверка работы
arr2=[5,6,7,8,9,10];
console.log(compareArrays(arr1, arr2));
