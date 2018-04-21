//1. Функция должна вернуть массив из центральных элементов переданных массивов.
/*
function findCentralElement(arr) {
	var arrRes = [];
	k = Math.floor(arr.length / 2);
	

	if (arr.length % 2 !== 0) {
		arrRes.push(arr[k]);
	} else {
		arrRes.push(arr[k-1], arr[k]);
	}

	return arrRes;
}
console.log([1, 2, 3, 4, 5])
console.log(findCentralElement([1, 2, 3, 4, 5]));

console.log([1, 2, 3, 4, 5, 6])
console.log(findCentralElement([1, 2, 3, 4, 5, 6]));
*/

//2.Написать функцию, которая получает 3 аргумента: два числа и функцию. 
//Произвести вызов переданной функции с двумя аргументами числами. doFunction(2, 3, power);
// в ответе должны получить 8, как 2 в степени 3.

//3.Из п.2 реализовать функции sum, div, mul, power

//4.Из п.2, если количество числовых аргументов равно единице и переданная функция factorial 
//- реализовать расчет факторикала. doFunction(6, factorial);, в ответе поулчаем 6! = 720.

function doFunction(a,b,callback){
	arg=arguments;
	if (arg.length===3 && typeof(a, b)==='number'  && typeof(callback)==='function'){
		return callback(a,b);
	} else if (arg.length===2 && typeof(a)==='number' && arg[1]==fuctorial){
		return fuctorial(a);
	} else {
		console.log ('error');
	}
	
}
    	

function power(c,d){
	return Math.pow(c, d);
}

function fuctorial(f){
	return (f<=1)?1:f*fuctorial(f-1);	
}

function sum (g,h){
	return g+h;
}

function div(k,l){
	return k/l;
}

function mul (m,n){
	return m*n;
}

console.log(doFunction(2,3, power));
console.log(doFunction(6, fuctorial));
console.log(doFunction(3,'1', fuctorial));
console.log(doFunction(2,0, div));
console.log(doFunction(16, -23, mul));