//1.Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, 
//есть в массиве элемент с заданным текстом или нет.

function inArray(word, array) {
	if (typeof(word) === 'string' && typeof(array) === 'object') {
		for (var i = 0; i < array.length; i++) {
			if (word === array[i])
				return true;
		}
		return false;
	} else {
		console.log('Enter correct datas!')
	}
}
console.log(inArray('hello', ['svnj', 'hello', 'cvpoq']));//true
console.log(inArray('hello', ['svnj', 'helllo', 'cvpoq']));//false
console.log(inArray(null, ['svnj', 'hello', 'cvpoq']));//'Enter correct datas!'



//2.Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый, 
//который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта

function assignObjects(obj1, obj2) {
	var objResult = {};

	for (var key in obj2) {
		objResult[key] = obj2[key];
	}

	for (var key in obj1) {
		if (!objResult[key])
			objResult[key] = obj1[key]	}

	return objResult;
}
console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));//{z: 30, x: 10, y: 20}
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));//{x: 20, y: 30}-приоритет obj2;


// 3.В задачу п.2 добавить 3ий аргумента flag, который является boolean. Если флаг true, 
//тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.

function assignObjectsModified(obj1, obj2, flag){
	if (flag){
		return assignObjects(obj2,obj1);
	} else {
		return assignObjects(obj1, obj2);
	}
}

console.log(assignObjectsModified({ x: 10 }, { x: 20, y: 30 }, true));//{x: 10, y: 30}
console.log(assignObjectsModified({ x: 10 }, { x: 20, y: 30 }, false));//{x: 20, y: 30}


function assignObjectsSuperModified(obj1, obj2, flag){
	if (arguments.length==3){
		return assignObjectsModified(obj1, obj2, flag)
	} else if (arguments.length==2){
		return assignObjectsModified(obj1, obj2, false)
	} else {
		console.log('Enter correct datas!')
	}
}
