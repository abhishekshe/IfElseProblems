let year=console.log("Please enter the year to check for leap year");

if(year%400==0)
{
    console.log(year+" is a leap year.");
}

else if(year%100==0)
{
    console.log(year+" is not a leap year.");
}

else if(year%4==0)
{
    console.log(year+" is a leap year.");
}

else
{
    console.log(year+" is not a leap year.");
}