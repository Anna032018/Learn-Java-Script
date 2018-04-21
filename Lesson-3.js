
//0. Прямоугольник
var m=40,
   n=10,
    space = ' ',
    separat = '***';

for(i=1; i<=m-2; i++){
  separat += "*";
  space +='&nbsp';
}
document.write(separat);
document.write('<br/>');

for(i=1; i<=n-1; i++){
  document.write('*');
  document.write(space);
  document.write('*<br />');
}
document.write(separat);

document.write('<br />');
document.write('<br />');

//____________________________________________________
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
