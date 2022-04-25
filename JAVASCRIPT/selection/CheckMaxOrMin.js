let a= 5
let b= 3
let c= 8

d= a+b*c;
e= c+a/b;
f= a%b+c;
g= a*b+c;
 
let maxFromResult= Math.max(d,e,f,g);
let minFromResult= Math.min(d,e,f,g);

console.log(maxFromResult);
console.log(minFromResult);