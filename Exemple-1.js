/*var a = +prompt('a?', '');

switch (a){
  case 0:
    alert( 0 );
    break;
  case 1:
    alert( 1 );
    break;
  case 2:
  case 3:
   alert( '2,3' );
   break;
  default:
  alert ('nothing');
}
 
var a = +prompt('ВВедите значение a', '');
var b = +prompt('ВВедите значение b', '');
for (var i=a; i>=b; i++){
  var y=i*i;

  if (i>=0) {
  console.log (y);
} else {
  console.log (-y);
}
}



var a=1;
var b=15;
var event = " ";
var odd = " ";
document.write('<table border=1><tr><td>');
for (i=a; i<=b; i++){
  if (i%2){
    event+=i;
  } else {
    odd+=i;
  }
}
document.write(odd+"</td></tr><tr><td>"+event);
document.write('</td></tr></table>');


do {
  var x = prompt('ВВедите значение x', '');
  var y = prompt('ВВедите значение y', '');
} while (isNaN(parseFloat(x)) || isNaN(parseFloat(y)));
x = +x;
y = +y;

var sum = 0;
if (x < y) {
  for (var i = x; i <= y; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }
} else {
  for (var i = x; i >= y; i--) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
}
console.log(sum);
*/

//______________________________________________________
//1. Прямоугольный триугольник:
h = 20;
space = ' ';
last = '* *';
document.write('*<br />');
for (i = 1; i < h; i++){
  document.write('*');
  document.write(space);
  document.write('*<br />');
  space += '&nbsp';

  last += '*';
}
document.write(last);
document.write('<br />');
document.write('<br />');

//______________________________________________________
//2. Равнобедренный триугольник:
h = 20;
space = ' ';
last='* '


for (i = 1; i < h + 1; i++) {
  space += '&nbsp';
}
document.write(space);
document.write("*<br/>");

space2 = ''+'&nbsp';
for (i = h - 1; i >= 1; i--) {
  space1 = ' ';
  for (j = 1; j <= i; j++) {
    space1 += '&nbsp';
  }
  
  document.write(space1);
  document.write('*');

  
  document.write(space2);
  document.write('*<br />');
  space2 += '&nbsp'+'&nbsp';
  last+='* '
}
document.write(last+'* ');

document.write('<br />');
document.write('<br />');

//______________________________________________________
//3. Ромб


h = 20;
space = ' ';
last='*'
arr1=[];
arr2=[];

for (i = 1; i < h + 1; i++) {
  space += '&nbsp';
}
document.write(space);
document.write("*<br/>");

space2 = ''+'&nbsp';
for (i = h - 1; i >= 0; i--) {
  space1 = ' ';
  for (j = 1; j <= i; j++) {
    space1 += '&nbsp';
  }
  arr1[i]=space1
  document.write(space1);
  document.write('*');

  arr2[i]=space2;
  document.write(space2);
  document.write('*<br />');
  space2 += '&nbsp'+'&nbsp';
  last+='* '
}
//document.write(last+' **')

for (i = 1; i < h ; i++){
  document.write(arr1[i]);
  document.write('*');
  document.write(arr2[i]);
  document.write('*<br />');
}
document.write(space);
document.write('*');
