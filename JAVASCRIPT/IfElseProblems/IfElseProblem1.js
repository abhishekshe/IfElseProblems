var a=Math.floor(Math.random()*(999-100+1)+100);
var b=Math.floor(Math.random()*(999-100+1)+100);
var c=Math.floor(Math.random()*(999-100+1)+100);
var d=Math.floor(Math.random()*(999-100+1)+100);
var e=Math.floor(Math.random()*(999-100+1)+100);
if(a>=b & a>=c & a>=d & a>=e)
    console.log("max value- "+a);
else if(b>=c & b>=d & b>=e)
    console.log("max value- "+b);
else if(c>=d & c>=e)
    console.log("maximum value- "+c);
else if(d>=e)
    console.log("maximum value- "+d);
else
    console.log("maximum value- "+e);
if(a<=b  & a<=c & a<=d & a<=e)
    console.log("min value- "+a);
else if(b<=c & b<=a & b<=d & b<=e)
    console.log("min value- "+b);
else if(c<=d & c<=e)
    console.log("min value- "+c);
else if(d<=e)
    console.log("min value- "+d);
else
    console.log("min value- "+e);

