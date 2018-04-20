//1.Есть обьект obj = { } Внутри него описываем методы copy, clear, doFunction. Организовать создание методов так, 
//что бы можно было вызывать любые комбинации:
//obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()

var obj={   //создаем обьект с указаными методами
	copy: copy,
	clear: clear,
	doFunction: doFunction
};

function doFunction(x,y, func){// метод №1
	this.result = func(x,y);
	return this;
}

function clear(){ // метод №2
	this.result=0;
	return this;
}

function copy(key){ //// метод №3
	this[key]='string';
	return this;
}

function sum(k,l){//фн-ция для метода №1
	return k+l;
}

function mul(m,n){ //фн-ция для метода №1
	return m*n;
}

console.log(obj.doFunction(2,4,sum).doFunction(3,6,mul).copy('name'));



//2.Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

function changeString(text){
	var text=text.replace(/_/g, '');
	return text;

}
console.log(changeString(' var_text_hello'));


//3.Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
//Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
//Функция должна возвращать true или false.

function inArray( text, arr ){

  for( var i = 0; i < arr.length; i++ )
    if( arr[i].indexOf( text ) >= 0 )
      return true;
  return false;
}
  
console.log(inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']));
//изменения для Git
//изменения №2


